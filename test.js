/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

/*
const url = "https://example.com/";
const method = "POST";
const headers = {"Field": "test-header-param"};
const data = {"info": "abc"};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
*/
const test = 
      {
          url:"https://www.baidu.com",
          method:"GET"
      }
$task.fetch(test).then(function(response)
                       {
    console.log(response.statusCode);
    $notify("TEst","test","kkkkkkkkkkkkkkkkkkkkk");
    $done()
})
