$(document).ready(function() {
    emailjs.init("user_9dNZgIkmVFyTqXNYDbUZB");		
    //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
    $('.submit_btn').click(function(e){       	 
        e.preventDefault();
        var templateParams = {	
        //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            email : $('.email').val(),
            name : $('.name').val(),
            phone : $('.phone').val(),
            message : $('.message').val()
        };
                
                
        emailjs.send('service_0nxhdom', 'template_yll3dpw', templateParams)
        //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("메일이 정상적으로 전송되었습니다.");
                email : $('.email').val('');
                name : $('.name').val('');
                phone : $('.phone').val('');
                message : $('.message').val('');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
    
});
    