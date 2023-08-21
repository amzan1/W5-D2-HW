import Available from "./Available";
import Loc from "../assets/location_icon.svg"
import caleander from "../assets/caleander_icon.svg"
import caleander1 from "../assets/caleander2_icon.svg"
interface card{
    type:string;
    supject:string;
    location:string;
    week:string;
    date:string;
    isAvailable:boolean;
}
function Cards(props:card) {
    
    return (
        <>
            <div className="card text-end m-5">
                <div className="card-body">
                <p className="card-text type">{props.type}</p>
                    <h5 className="card-title">{props.supject}</h5>
                    <div className="info d-flex ">
                    <p className="card-text">{props.location}<img src={Loc} alt="location"width={20.83} height={20} /></p>
                    <p className="card-text">{props.week}<img src={caleander} alt="week" width={20} height={20}/></p>
                    </div>
                    
                    <p className="card-text">{props.date}<img src={caleander1} alt="date" width={18.82} height={20}/></p>
                    < button className="btn d-flex flex-wrap-reverse"><Available isAvailable={props.isAvailable}></Available></button>
                </div>
            </div>
        </>
    )
}

export default Cards