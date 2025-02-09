"use client"

const AlertBox = ({
    alertText, 
    alertButtonText,
    isShow,
    onClick
}:{
    alertText:string;
    alertButtonText:string;
    isShow:boolean;
    onClick:any
}) => {

    return <div style={{
    backgroundColor:'green', 
    display:isShow?"":"none"
    }}>
    <label id="txtAlertText">{alertText}</label>
    <button id="btnAlertOK"
        type="button"
        onClick={onClick}
    >
        {alertButtonText}
    </button>
    </div>
}

export default AlertBox;