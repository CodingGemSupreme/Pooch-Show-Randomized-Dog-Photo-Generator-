const Mash = (props) => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.poochSearch();
       
    }
    return (
        <div className="button" onSubmit={handleSubmit}>
            <h1>The Pooch Show Welcomes You!</h1>
            <h3>Mash The Button To Show a Pooch</h3>
            <form>
                <button type="submit">Press Me Please</button>
            </form>
        </div>
    )
}

export default Mash;