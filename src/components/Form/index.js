
const Form = ({ formList, formValue, formOnChange }) => {
    return (
        <section className="w-5/6">
            <form onSubmit={formList} className="flex flex-col gap-2 items-center">
                <input
                    value={formValue}
                    onChange={event => formOnChange(event.target.value)}
                    placeholder="Digite sua terefa"
                    className="rounded-lg w-full flex placeholder:text-center text-center text-backGround_1"
                />
                <button type='submit' className="bg-primary w-2/5 rounded-full font-bold">Cadastrar</button>
            </form>
        </section>
    )
}

export default Form
