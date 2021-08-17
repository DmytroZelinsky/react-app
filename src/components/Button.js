const Button = ({color, text, backgroundColor, onClick}) => {
    return (            
        <button
        onClick = {onClick} 
        style = {{color, backgroundColor}}
        className='btn'>
            {text}
        </button>
    )
}

export default Button
