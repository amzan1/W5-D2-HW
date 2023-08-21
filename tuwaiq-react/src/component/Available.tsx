interface Available{
    isAvailable:boolean;
}
function Available(props:Available) {
    const Available = props.isAvailable;
    if(Available){
        return <button className="active">تفاصيل</button>;
    }else {
        return <button className="notActive">مغلق</button>
    }
}

export default Available