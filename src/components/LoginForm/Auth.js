class Auth {
    static login(email, password) {
      // Aquí puedes implementar la lógica de autenticación, como realizar una llamada a una API o utilizar un servicio de autenticación externo.
      // Retorna una promesa que resuelve la respuesta de autenticación exitosa o rechaza con un error en caso de fallo.
      return new Promise((resolve, reject) => {
        // Simulación de autenticación exitosa después de 1 segundo
        setTimeout(() => {
          if (email === 'chuete@gmail.com' && password === '123') {
            resolve({ token: 'abc123' }); // Por ejemplo, puedes retornar un token de acceso
          } else {
            reject(new Error('Error de autenticación'));
          }
        }, 1000);
      });
    }
  }
  
  export default Auth;