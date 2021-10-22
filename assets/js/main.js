/* Il nostro compito é quello di rappresentare, 
utilizzando la struttura dati piú appropriata, 
una lista di membri di un team.
Ciascun membro del team avrá come caratteristica 
- name, 
- role, 
- image 
Stampare in console tutti gli elementi del team e le loro proprieta.
*/

const team = [
  {
    Name: "Chiara",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Nicola",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Federico",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Valerio",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Luca",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Andrea",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Valentina",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Doina",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Alessia",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Simla",
    role: "student",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Fabio",
    role: "teacher",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Fabiola",
    role: "tutor",
    Image: "https://picsum.photos/id/1/200/300",
  },
  {
    Name: "Tiziano",
    role: "tutor",
    Image: "https://picsum.photos/id/1/200/300",
  },
];

/* console.log(team); */

for (let i = 0; i < team.length; i++) {
  const member = team[i];
  /* console.log(member);
  console.log(i); */
  for (const key in member) {
    console.log(member[key]);
  }
  console.log("_____________");
}
