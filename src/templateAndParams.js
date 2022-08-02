function greeting($greeting ='hello'){
    console.log($greeting);// default params
}
function makeUpperCase(word){
   return word.toUpperCase();
}
let name ='Joghn';
let template =
`<h1>${makeUpperCase('Hello')} ${name}</h1>
<p> hello hioohyogi </p>`
document.getElementById('template').innerHTML=template;