console.log("App.js is running!!")

const app = {
    title:" Indecision  APP ",
    subTitle:"Put your life in the hands of a computer",
    options:[]
}

function getSubTitle(subtitle) {
    if (subtitle)
        return <p> location: {subtitle} </p>;
}
function getParagraph(options) {
    if (options.length > 0)
        return (
        <div>
            <p> Here Are your Options</p>
            <ol>
                <li>{options[0]}</li>
                <li>{options[1]}</li>
            </ol>
        </div>
        )
    else
        return <p> No Options</p>;
}

const onRemoveAll = (e) => {
    app.options = []
    render();
}

const onMakeDecision = () => {
    const randomNum =Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}  
        {app.options.length > 0 ? "Here are your options" : "No options"}
        <p>{app.options.length}</p>
        <button disabled={app.options.length === 0} onClick = {onMakeDecision}>What should i do?</button>
        <button onClick = {onRemoveAll}>Remove All</button>
        <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
        </ol>
        <form onSubmit = {onFormSubmit}>
            <input type = "text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
render();

