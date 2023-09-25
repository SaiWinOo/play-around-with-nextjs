type GreetProps = {
    name : string
};


const Greet = (props : GreetProps) => {
    return (
        <div>
            Hello {props.name}, Welcome back!
        </div>
    );
};

export default Greet;