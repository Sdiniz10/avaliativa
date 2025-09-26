function mascara_cep()
        { let cep_formatado = document.getElementById("cep").value
            if (cep_formatado[2]!=".")
            {
                if (cep_formatado[2]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
                }
            }
        
            if (cep_formatado[6]!="-")
            {
                if(cep_formatado[6]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                }
            }

        }       

        function mascara_tel () {
            let tel_formatado = document.getElementById("tel").value 
            if (tel_formatado [0]!= "(") {
                 if(tel_formatado[0]!=undefined) {
      document.getElementById("tel").value="("+tel_formatado[0];
                 }
           
                }
            if (tel_formatado[3]!=")")
            {
                if (tel_formatado[3]!=undefined)
                {
                    document.getElementById("tel").value=tel_formatado.slice(0,3)+")"+tel_formatado[3];
                }
            }
            if (tel_formatado[4]!=" ")
            {
                if (tel_formatado[4]!=undefined)
                {
                    document.getElementById("tel").value=tel_formatado.slice(0,4)+" "+tel_formatado[4];
                }
            }
             if (tel_formatado[6]!=" ")
            {
                if (tel_formatado[6]!=undefined)
                {
                    document.getElementById("tel").value=tel_formatado.slice(0,6)+" "+tel_formatado[6];
                }
            }
             if (tel_formatado[11]!="-")
            {
                if (tel_formatado[11]!=undefined)
                {
                    document.getElementById("tel").value=tel_formatado.slice(0,11)+"-"+tel_formatado[11];
                }
            }


        
        }

        function mascara_cpf () {
            let cpf_formatado = document.getElementById("cpf").value 

            if (cpf_formatado[3]!=".")
            {
                if (cpf_formatado[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
                }
            }
            
            if (cpf_formatado[7]!=".")
            {
                if (cpf_formatado[7]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7];
                }
            }
             if (cpf_formatado[11]!="-")
            {
                if (cpf_formatado[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11];
                }
            }
        }
        function mascara_cnpj () {
              let cpf_formatado = document.getElementById("cnpj").value 
                if (cpf_formatado[2]!=".")
            {
                if (cpf_formatado[2]!=undefined)
                {
                    document.getElementById("cnpj").value=cpf_formatado.slice(0,2)+"."+cpf_formatado[2];
                }
            }
            
            if (cpf_formatado[6]!=".")
            {
                if (cpf_formatado[6]!=undefined)
                {
                    document.getElementById("cnpj").value=cpf_formatado.slice(0,6)+"."+cpf_formatado[6];
                }
            }
              if (cpf_formatado[10]!="/")
            {
                if (cpf_formatado[10]!=undefined)
                {
                    document.getElementById("cnpj").value=cpf_formatado.slice(0,10)+"/"+cpf_formatado[10];
                }
            }
              if (cpf_formatado[14]!="-")
            {
                if (cpf_formatado[14]!=undefined)
                {
                    document.getElementById("cnpj").value=cpf_formatado.slice(0,14)+"-"+cpf_formatado[14];
                }
            }
        }
         function mascara_codigo () {
              let cpf_formatado = document.getElementById("codigo").value 
                if (cpf_formatado[2]!=".")
            {
                if (cpf_formatado[2]!=undefined)
                {
                    document.getElementById("codigo").value=cpf_formatado.slice(0,2)+"."+cpf_formatado[2];
                }
            }
            
            if (cpf_formatado[6]!=".")
            {
                if (cpf_formatado[6]!=undefined)
                {
                    document.getElementById("codigo").value=cpf_formatado.slice(0,6)+"."+cpf_formatado[6];
                }
            }
              if (cpf_formatado[10]!="/")
            {
                if (cpf_formatado[10]!=undefined)
                {
                    document.getElementById("codigo").value=cpf_formatado.slice(0,10)+"/"+cpf_formatado[10];
                }
            }
              if (cpf_formatado[14]!="-")
            {
                if (cpf_formatado[14]!=undefined)
                {
                    document.getElementById("codigo").value=cpf_formatado.slice(0,14)+"-"+cpf_formatado[14];
                }
            }
            if (cpf_formatado[15]!="9")
                {
                    if (cpf_formatado[15]!=undefined)
                    {
                        document.getElementById("codigo").value=cpf_formatado.slice(0,15)+"9"+cpf_formatado[15];
                    }
                }
        }