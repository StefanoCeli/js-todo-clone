$(document).ready(function(){
    var arrToDo=[
        "chiamare il medico",
        "fare la spesa",
        "registrare programma preferito",
        "Prenotare gioco in uscita"
    ]

    for(var i=0; i<arrToDo.length; i++){
        var ToDo=arrToDo[i]
        //console.log(ToDo);
        var strToDo= '<li>' + ToDo + '<i class="far fa-trash-alt"></i></li>';
        $('.container ul').append(strToDo)
    }
    $(document).on('click','.fa-trash-alt',function(){
        $(this).parent().remove();
    })
    $('.container input').keyup(function(event){

        if(event.which===13){
            //console.log($(this).val());
            var strToDo= '<li>' + $(this).val().trim() + '<i class="far fa-trash-alt"></i></li>';

            if($(this).val().length>3){
                $('.container ul').append(strToDo);
                $(this).val('');
            }

        }
    })
})