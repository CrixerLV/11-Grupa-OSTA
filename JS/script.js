// Admin skats

// Login

function validate()
{
    var user=document.getElementById('vards').value;
    var pass=document.getElementById('parole').value;
    if((user=="admin")&&(pass=="admin"))
    {
        window.alert("Veiksmīgi");
        window.location.href='../html/Admin.html';
    }
    else
        window.location.href='Veiksmigi.html';
}