$(document).ready(function(){
    //creo un array e inserisco delle stringhe
    var arrToDo=[
        "Chiamare il medico",
        "Fare la spesa",
        "Registrare programma preferito",
        "Prenotare gioco in uscita"
    ]
    //creo un ciclo per stampare a video l'array
    for(var i=0; i<arrToDo.length; i++){
        var ToDo=arrToDo[i]
        //console.log(ToDo);

        //primo metodo
        //var strToDo= '<li><p>' + ToDo + '</p><i class="far fa-trash-alt"></i></li>';

        //secondo metodo
        var elemento= $('.template li').clone();
        $(elemento).find('.testo').append(ToDo)
        $('.container ul').append(elemento);
    }
    //qui tramite la funzione "on" vado a richiamare l'evento click che fa riferimento all'icona e gli vado a dire che una volta cliccato di rimuovere il padre
    $(document).on('click','.fa-trash-alt',function(){
        $(this).parent().remove();
    })
    //qui tramite la funzione "keyup" vado a intercettare l'evento all'interno dell'input dell'invio della tastiera
    $('.container input').keyup(function(event){

        if(event.which===13){
            //console.log($(this).val());
            //primo metodo
            //var strToDo= '<li><p>' + $(this).val().trim() + '</p><i class="far fa-trash-alt"></i></li>';

            //secondo metodo
            var elemento= $('.template li').clone();
            var ToDo=$(this).val().trim();

            //qui vado a specificare che se la parola è piu lunga di 3 lettere,vado a inserire la stringa dentro l'ul,dopodichè vado a svuotare l'input dicendogli di sovrascrivere il valore con una stringa vuota
            if(ToDo.length>3){
                $(elemento).find('.testo').append(ToDo);
                $('.container ul').append(elemento);
                $(this).val('');
            }

        }
    })
})