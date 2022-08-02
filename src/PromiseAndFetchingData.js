//Imediately resolve promise
// var myPromise = Promise.resolve('Hello');
// myPromise.then((res)=>console.log(res));

/*var myPromise = new Promise(function(resolve,reject){
    setTimeout(() => resolve(4),2000);
});
myPromise.then((res)=>{
    res+=3;
    console.log(res);
});*/

function getData(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        }
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}
getData('GET', 'https://jsonplaceholder.typicode.com/posts').then(function (data) {
    let posts = JSON.parse(data);
    let output = '';
    for (const post of posts) {
        output +=
            `<li>
         <h3> ${post.title}</h3>
         <p> ${post.body}</p>
         </li>`
    }
    document.getElementById('template').innerHTML = output;
}).catch(function (err) {
    console.log(err);
});