const tbody = document.getElementById("output");

tbody.innerHTML = `
    <tr>
        <td colspan="2">Loading...</td>
    </tr>
`;

function createPromise(delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`${delay/1000}`);
        }, delay);
    });
}

const promises=[createPromise(2000, "Promise 1"),createPromise(1000, "Promise 2"),createPromise(2580, "Promise 3")]



Promise.all(promises)
    .then(results => {
        tbody.innerHTML = ""; 
        
        results.forEach((time,index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>Promise ${index + 1}</td>
                <td>${time}</td>
            `;
            tbody.appendChild(row);
        });
        let totalTime = 0;
        for(let i=0;i<results.length;i++)
        {
            totalTime=totalTime+parseFloat(results[i]);
        }

        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `
            <td>Total</td>
            <td>${totalTime}</td>
        `;
        tbody.appendChild(totalRow);
    })
    .catch(err => {
        console.log(err);
    });
