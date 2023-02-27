


export const Button = (props)=>{
        const {text, color, type, size} = props;
        let submit = false;
        let link = false;
        let normal =false;
        if (type === "submit"){
            submit = true;
        }
        else if (type === "link"){
            link = true;
        }else{
            normal = true;
        }

        let buttonClass = " font-bold rounded-lg text-center ";
        if(size === "small"){
            buttonClass += " text-sm px-2.5 py-2.5"
        }
        else if(size === "note"){
            buttonClass+=" text-2xl p-4 "
        }else{
            buttonClass += "text-lg px-6 py-2.5 "
        }
        if (color === "white"){
            buttonClass +=" text-black bg-slate-50 ";
        }
        else if(color === "red"){
            buttonClass +=" text-white bg-red-600 "
        }
        else if(color === "orange"){
            buttonClass +=" text-white bg-orange-600 "
        }
        else{
            buttonClass +=" text-black bg-slate-50 "
        }


    return(
        <div>
            {submit &&

                <button className={buttonClass}
                        type={type}
                >
                    {text}
                </button>

            }

            {link &&
                <button className={buttonClass}
                        type="button"

                >
                    <a href="#">{text}</a>
                </button>

            }
            {
                normal &&
                    <button className={buttonClass}
                            type="button"

                    >
                        {text}
                    </button>
            }
        </div>
    );
}