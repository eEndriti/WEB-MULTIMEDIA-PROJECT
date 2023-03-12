export function postCode(title,postedBy,email,source,html,css,js){
    document.getElementById('form2').classList.add('d-none')
    document.getElementById('first-text').classList.add('d-none')
    document.getElementById('loading').classList.remove('d-none')

    if(!check(email,source,html,css,js)){
        alert('Invalid Input!')
    }else{
       
        const date = getDateAndTime()
        fetch(`https://640a41e181d8a32198c4b76a.mockapi.io/postedForReview`, {
        method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
            email: email,
            source: source,
            html: html,                
            css: css,
            js: js,
            date: date,
            postedBy:postedBy,
            title:title
       }         )
       })
       .then(response => response.json())
       .then(data =>{
        alert('Your code was succesfully added for review,Thank you in advance!');
        location.reload();
      }) 
       .catch(error => alert(error))
    }
}
function check(email,source,html,css,js){
    if(email == null || source == null || html == null || css == null || js == null){
        return false
    }else
    return true
}
function check2(email,subject,msg){
    if(email == null || subject == null || msg == null){
        return false
    }else
    return true
}
function getDateAndTime(){
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + "  "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
  
                  return datetime
  }

  export function postMessage(){

    document.getElementById('form').classList.add('d-none')
    document.getElementById('loading').classList.remove('d-none')

    if(!check2(email,subject,msg)){
        alert('Invalid Input!')
    }else{
       
        const date = getDateAndTime()
        fetch(`https://640a41e181d8a32198c4b76a.mockapi.io/messages`, {
        method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
            email: email,
            subject: subject,
            msg: msg,                
            date: date
       }         )
       })
       .then(response => response.json())
       .then(data =>{
        alert('Your message was succesfully added for review!');
        location.reload();
      }) 
       .catch(error => alert(error))
    }
  }