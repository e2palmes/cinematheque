


export const FormSubmit = (props)=>{

    return(
        <button type="submit"
                className="text-black bg-slate-300  font-medium rounded-lg text-lg  px-6 py-2.5 text-center">
                {props.buttonText}

        </button>
    );
}