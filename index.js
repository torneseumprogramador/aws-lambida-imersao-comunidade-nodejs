exports.handler = async (params) => {
  const body = JSON.parse(params.body)
  const param1 = body.param1
  
  let responseBody = [
      {
          nome: "imersao",
          versao: "v1"
      }
  ]
  
  let status = 200
  
  if(!param1){
      responseBody = {
          mensagem: "ação negada",
      }
      status = 401
  }
  
  // TODO implement
  const response = {
      headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "max-age=3600, public"
      },
      statusCode: status,
      body: JSON.stringify(responseBody)
  };
  return response;
};
