import "./button-add.css";

function Button({children, onClick}){

    return (
    <>
        <button onClick={onClick} className="add-task"> {children}</button>
    </>
    )
}

export default Button;