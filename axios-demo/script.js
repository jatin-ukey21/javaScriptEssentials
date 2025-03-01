function fetchData(){
    axios.get('https://jsonplaceholder.typicode.com/posts/100')
      .then(response => {
        document.getElementById('output').textContent = JSON.stringify(response.data,null,2);
      })
      .catch(error => {
        document.getElementById('output').textContent = `Error: ${error.message}`;
      })
}

function postData() {
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title: 'Hello world',
        body: 'this is a sample post',
        userId : 100,
        id:100
    })
    .then(response => {
        console.log('Response:-',response.data);
        alert('data submitted');
    })
    .catch(error => console.error('Error:', error));
}