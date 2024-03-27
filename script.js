const tbody = document.getElementById("output");

tbody.innerHTML = `
    <tr>
        <td colspan="2">Loading...</td>
    </tr>
`;

function createPromise(delay, name) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`${delay/1000}`);
        }, delay);
    });
}

const promises=[createPromise(2000, "Promise 1"),createPromise(1000, "Promise 2"),createPromise(2580, "Promise 3")]



Promise.all(promises).then((results)=>{
    tbody.innerHTML=""
    results.forEach((time,index)=>{
        

        const row = document.createElement('tr');
        row.innerHTML = `promise ${index+1}`;
        row.innerHTML = `
                <td>Promise ${index + 1}</td>
                <td>${time}</td>
            `;
            tbody.appendChild(row);
        // console.log(`promise ${index+1} :${result}`)
    })
}).catch(err=>{
    console.log(err);
})