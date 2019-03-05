using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace fragonApp.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string CPF { get; set; }
        //public DateTime DataNascimento { get; set; }
        public int Idade { get; set; }
        public int Profissao { get; set; }
    }
}