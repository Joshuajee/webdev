let x = 10

setTimeout(() => {
    x =  20
}, 1000)



function myPromise(error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject ("Error Occured")
            } else {
                resolve("my Promise")
            }
           
        }, 1000)
    })
}

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(200)
    }, 1000)

}).then((response) => {
    console.log(response)
})

myPromise(true).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})



https://api.coingecko.com/api/v3/coins/list

console.log(x)
const list = document.getElementById("list")

fetch("https://api.coingecko.com/api/v3/coins/list")
    .then(response => {
        if (response.ok) {
            console.log("well")
            return response.json()
        }

    }).then(data => {


        for (let i = 0; i < 100; i++) {
            console.log(data[i])
            const coin = data[i]
            list.innerHTML += "<div> <b> Name: </b> " + coin.name + " <b>Symbol: </b> " + coin.symbol + "</div>"
        }
    }).catch(err=> {
        console.log(err)
        alert("Error")
    } )

async function myFunc() {

    const response  = await fetch("https://api.coingecko.com/api/v3/coins/list")

    const data = await response.json()

    console.log(data)

}

myFunc()

const myFunc2 = async() => {
    try {
    const data = await myPromise(false)
    console.log(await myPromise())
    console.log(data)
    console.log("HI")


    } catch(err) {
        console.log(err)
    }
}

myFunc2()