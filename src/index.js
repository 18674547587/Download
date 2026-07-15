export default {
  async fetch(request) {

    const url = new URL(request.url);

    const target = url.searchParams.get("url");

    if (!target) {
      return new Response(
        "请输入 url 参数",
        {status:400}
      );
    }


    const response = await fetch(target);


    return new Response(
      response.body,
      {
        status: response.status,
        headers: response.headers
      }
    );

  }
};
