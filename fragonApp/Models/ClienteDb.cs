using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

namespace fragonApp.Models
{
    public class ClienteDb
    {
        public void Incluir(Cliente cliente)
        {
            string sql = "INSERT INTO Cliente(Nome,Sobrenome,CPF,Idade, Profissao) Values(@Nome,@Sobrenome,@CPF, @Idade, @Profissao)";
            var cn = new SqlConnection(Conexao.conexao);
            var cmd = new SqlCommand(sql, cn);
            cmd.Parameters.AddWithValue("@Nome", cliente.Nome);
            cmd.Parameters.AddWithValue("@Sobrenome", cliente.Sobrenome);
            cmd.Parameters.AddWithValue("@CPF", cliente.CPF);
            cmd.Parameters.AddWithValue("@Idade", cliente.Idade);
            cmd.Parameters.AddWithValue("@Profissao", cliente.Profissao);
            cn.Open();
            cmd.ExecuteNonQuery();
            cn.Close();
        }

        public void Alterar(Cliente cliente)
        {
            string sql = @"UPDATE Cliente 
                           SET Nome=@Nome,Sobrenome=@Sobrenome,CPF=@CPF, Idade=@Idade, Profissao=@Profissao 
                          WHERE Id=@Id";

            var cn = new SqlConnection(Conexao.conexao);
            var cmd = new SqlCommand(sql, cn);
            cmd.Parameters.AddWithValue("@Id", cliente.Id);
            cmd.Parameters.AddWithValue("@Nome", cliente.Nome);
            cmd.Parameters.AddWithValue("@Sobrenome", cliente.Sobrenome);
            cmd.Parameters.AddWithValue("@CPF", cliente.CPF);
            cmd.Parameters.AddWithValue("@Idade", cliente.Idade);
            cmd.Parameters.AddWithValue("@Profissao", cliente.Profissao);
            cn.Open();
            cmd.ExecuteNonQuery();
            cn.Close();
        }

        public void Excluir(int Id)
        {
            string sql = @"DELETE Cliente WHERE Id=@Id";

            var cn = new SqlConnection(Conexao.conexao);
            var cmd = new SqlCommand(sql, cn);
            cmd.Parameters.AddWithValue("@Id", Id);
            cn.Open();
            cmd.ExecuteNonQuery();
            cn.Close();
        }

        public Cliente ObterPorId(int id)
        {
            string sql = @"SELECT * 
                            FROM Cliente 
                            WHERE Id=@Id";
            var cn = new SqlConnection(Conexao.conexao);
            var cmd = new SqlCommand(sql, cn);
            cmd.Parameters.AddWithValue("@Id", id);

            Cliente cliente = null;

            cn.Open();

            SqlDataReader reader = cmd.ExecuteReader();

            if (reader.Read())
            {
                cliente = new Cliente();
                cliente.Id = Convert.ToInt32(reader["Id"]);
                cliente.Nome = reader["Nome"].ToString();
                cliente.Sobrenome = reader["Sobrenome"].ToString();
                cliente.CPF = reader["CPF"].ToString();
                cliente.Idade = Convert.ToInt32(reader["Idade"]);
                cliente.Profissao = Convert.ToInt16(reader["Profissao"]);

            }
            reader.Close();
            cn.Close();
            return cliente;
        }

        public List<Cliente> Listar()
        {
            string sql = "SELECT * FROM Cliente";
            var cn = new SqlConnection(Conexao.conexao);
            var cmd = new SqlCommand(sql, cn);

            List<Cliente> lista = new List<Cliente>();

            cn.Open();

            SqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                var cliente = new Cliente();
                cliente.Id = Convert.ToInt32(reader["Id"]);
                cliente.Nome = reader["Nome"].ToString();
                cliente.Sobrenome = reader["Sobrenome"].ToString();
                cliente.CPF = reader["CPF"].ToString();
                cliente.Idade = Convert.ToInt32(reader["Idade"]);
                cliente.Profissao = Convert.ToInt16(reader["Profissao"]);

                lista.Add(cliente);
            }
            reader.Close();
            cn.Close();
            return lista;
        }

    }
}
