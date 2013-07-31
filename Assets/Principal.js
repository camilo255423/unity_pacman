#pragma strict
var galleta:Rigidbody;
function Start () {
var i:int;
for(i=1;i<=26;i++)
{
Instantiate(galleta,Vector3(i*10,8,10),Quaternion.identity);
}

}

function Update () {

}