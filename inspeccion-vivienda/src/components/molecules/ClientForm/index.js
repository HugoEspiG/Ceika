import { useForm } from "react-hook-form"
import React from "react";
import Input from "../../../atoms/input";


export default function ClientForm({ onSubmit }) {

    const { register, handleSubmit, formState: { errors } } = useForm()


    return (
        <div className="mb-3 text-center mt-5 mx-auto" style={{ width: "100%" }}>
            <div className="col">
                <form  onSubmit={handleSubmit(onSubmit)} id="form-data" className="mt-5 col mx-4">
                    <Input
                        placeholder={"Tu nombre"}
                        type={'text'}
                        classNameDiv={"form-floating mt-3 col-10 mx-auto"}
                        classNameInput={""}
                        {...register('name', { required: true })}
                        autoComplete="off"
                        label={"Tu nombre"}
                    >
                        {errors.name && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    </Input>
                    <Input
                        placeholder={"Tu correo"}
                        type={'email'}
                        classNameDiv={"form-floating mt-3 col-10 mx-auto"}
                        classNameInput={""}
                        {...register('email', { required: true })}
                        autoComplete="on"
                        label={"Tu correo"}
                    >
                        {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    </Input>
                    <Input
                        placeholder={"Numero de telefono"}
                        type={'number'}
                        classNameDiv={"form-floating mt-3 col-10 mx-auto"}
                        classNameInput={""}
                        {...register('number', { required: true })}
                        autoComplete="on"
                        label={"Numero de telefono"}
                    >
                        {errors.number && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    </Input>
                    <Input
                        placeholder={"Direccion de la inspeccion"}
                        type={'text'}
                        classNameDiv={"form-floating mt-3 col-10 mx-auto"}
                        classNameInput={""}
                        {...register('adress', { required: true })}
                        autoComplete="on"
                        label={"Direccion de inspeccion"}
                    >
                        {errors.adress && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                    </Input>
                </form>
            </div>
        </div>
    )
}