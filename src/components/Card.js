import Profilepic from '../assets/images/propic.png';

function Card (){

   return (
    <div className="card1">
        <img className="mypropic"src={Profilepic} alt="profile picture"></img>
        <h2>Praveen Thathsara Rathnayake</h2>
        <p>Hello I'm an undergraduate student in<br></br>Sabaragamuwa University of Sri Lanka<br></br>
        BSc.hons Computing and Information System </p>

    </div>
   );

}

export default Card;