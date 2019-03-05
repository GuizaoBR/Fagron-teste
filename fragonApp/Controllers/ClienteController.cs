using fragonApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace fragonApp.Controllers
{
    public class ClienteController : ApiController
    {
        ClienteDb db = new ClienteDb();





        [HttpGet]
        [Route("api/Clientes")]
        public HttpResponseMessage GetAll()
        {
            var lista = this.db.Listar();
            return Request.CreateResponse(HttpStatusCode.OK, lista.ToArray());
        }

        [HttpGet]
        [Route("api/Clientes/{id:int}")]
        public HttpResponseMessage GetById(int id)
        {
            var cliente = this.db.ObterPorId(id);

            return Request.CreateResponse(HttpStatusCode.OK, cliente);
        }

        [HttpDelete]
        [Route("api/Clientes/{id:int}")]
        public HttpResponseMessage DeleteById(int id)
        {
            this.db.Excluir(id);
            return Request.CreateResponse(HttpStatusCode.OK, true);

        }

        [HttpPost]
        [Route("api/Clientes")]
        public HttpResponseMessage Post(Cliente cliente)
        {
            this.db.Incluir(cliente);
            return Request.CreateResponse(HttpStatusCode.OK, true);
        }

        [HttpPut]
        [Route("api/Clientes/{id:int}")]
        public HttpResponseMessage Put(int id, Cliente cliente)
        {
            this.db.Alterar(cliente);
            return Request.CreateResponse(HttpStatusCode.OK, true);
        }


    }
}
