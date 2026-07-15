export default {
  async fetch(request) {

    const url = new URL(request.url);

    const target = url.searchParams.get("url");


    if (!target) {
      return new Response(
        "请输入下载地址",
        {
          status: 400,
          headers:{
            "Content-Type":"text/plain;charset=UTF-8"
          }
        }
      );
    }


    try {

      const response = await fetch(target);


      return new Response(
        response.body,
        {
          status: response.status,
          headers: response.headers
        }
      );


    } catch(e){

      return new Response(
        "下载失败: " + e.message,
        {
          status:500
        }
      );

    }

  }
}