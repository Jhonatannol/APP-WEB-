// Objeto
const user = {
    name: "Jhonatan",
    lastname: "Nolasco",
    age: 23,
    address: {
      streets: "Av. Guatemala y Juan Soto"
    }
  };
  
  // Desestructuración del objeto para obtener los datos
  const { name, lastname, age, address: { streets } } = user;
  
  // Mostrar los resultados en consola
  console.log(name, lastname, age, streets);
  


  // Arreglo 
const users = [
    {
      name: "Carlos",
      lastname: "Pérez",
      age: 28,
      address: { streets: "Calle Foch y Av. Colón" }
    },
    {
      name: "Laura",
      lastname: "González",
      age: 24,
      address: { streets: "Av. Amazonas y 10 de Agosto" }
    },
    {
      name: "Felipe",
      lastname: "Ramírez",
      age: 30,
      address: { streets: "Calle Sucre y Av. 6 de Diciembre" }
    },
    {
      name: "María",
      lastname: "Martínez",
      age: 26,
      address: { streets: "Calle Naciones Unidas y Av. República" }
    }
  ];
  
  // Desestructuración del primer usuario del arreglo
  const { name: nameUser, lastname: lastnameUser, age: ageUser, address: { streets: streetUser } } = users[0];
  
  // Mostrar los resultados en consola
  console.log(nameUser, lastnameUser, ageUser, streetUser);
  