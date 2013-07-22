#pragma strict
var controller:CharacterController;
var velocidad:float;
function Start () {
controller = this.GetComponent("CharacterController");
velocidad = 0.2;
}

function Update () {
var vertical:float = Input.GetAxis("Vertical");
var horizontal:float = Input.GetAxis("Horizontal");
var velocidad3:Vector3;

if(vertical!=0.0f) 
{
velocidad3 = velocidad * new Vector3(0,0,vertical);
}

if(horizontal!=0.0f)
{
velocidad3 = velocidad * new Vector3(horizontal,0,0);
}
controller.Move(velocidad3);
}