import axios from "axios"

class UsuarioService{

    async cadastrar(data){
        return axios({
            url: "http://localhost:3000/cadastrar",
            method: "POST",
            timeout: 5000,
            data: data, 
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()
export default usuarioService