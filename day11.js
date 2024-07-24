// Day 11: Promises and Async/Await

// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

let myPromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Hello, I am from myPromise")
    }, 2000);
});

myPromise.then( (val) => {
    console.log("The message is :", val);
})

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rejected after 2 seconds");
    }, 2000);
  }).catch((error) => {
    console.error(error);
  });


// ALTERNATE FOR TASK 1 & TASK 2
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const networkSuccess = Math.random() > 0.5; // Simulate network success or failure
      if (networkSuccess) {
        resolve("Data fetched successfully");
      } else {
        reject("Network error: Failed to fetch data");
      }
    }, 2000);
  });
  
  fetchData
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5; // 50% chance to resolve, 20% chance to reject
        if (success) {
          resolve("Data from server 1");
        } else {
          reject("Error fetching data from server 1");
        }
      }, 1000);
});

const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from server 2");
    }, 2000);
});

const fetchData3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from server 3");
    });
});
  
// Chain the promises to log the messages in specific order
fetchData1
    .then ((data1) => {
        console.log(data1);
        return fetchData2;
    })
    .then((data2) => {
        console.log(data2);
        return fetchData3;
    })
    .then((data3) => {
        console.log(data3);
    })
    .catch((err) => {
        console.log(err);
    })

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

function fetchDataFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% chance to resolve, 50% chance to reject
            if (success) {
              resolve("Data fetched from fetchDataFunc");
            } else {
              reject("Failed to fetch data in fetchDataFunc");
            }
          }, 2000);
    });
}

/// ASYNC Func
async function fetchAndLogDataFunc() {
    try {
        const data = await fetchDataFunc();
        console.log(data);
    } catch (err) {
        console.error("Error: ", err);
    }
}

fetchAndLogDataFunc();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function toReject() {
    try {
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Code is Rejected")
            }, 3000)
        })
        data = await promise
    } catch (error) {
        console.log("Error:", error)
    }
}

toReject()

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

let fetchCat = new Promise((resolve, reject) => {
    resolve(fetch("https://api.thecatapi.com/v1/images/search"));
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  }).then((data) => {
    console.log("Cat:", data[0].url);
  }).catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
  