using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace fragonApp.Models
{
    public class Conexao
    {
        public static string conexao
        {
            get
            {
                return @"Data Source=localhost;Initial Catalog=fragonDB;Integrated Security=False;Integrated Security=True";
            }
        }
    }
}