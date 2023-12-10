import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Занадто коротке ім\'я')
        .max(50, 'Занадто довге ім\'я')
        .required('Обов\'язкове поле'),
    lastname: Yup.string()
        .min(2, 'Занадто коротке ім\'я')
        .max(50, 'Занадто довге ім\'я')
        .required('Обов\'язкове поле'),
    email: Yup.string()
        .email('Невірний формат email')
        .required('Обов\'язкове поле'),
    phone: Yup.string()
        .matches(/^\d+$/, 'Номер телефону повинен містити лише цифри')
        .min(9, 'Занадто короткий номер тел')
        .max(14, 'Занадто довгий номер тел')
        .required('Обов\'язкове поле'),
    password: Yup.string()
        .min(8, 'Пароль повинен бути не менше 8 символів')
        .required('Обов\'язкове поле'),
    address: Yup.string()
        .min(10, 'Адреса занадто коротка')
        .max(100, 'Адреса занадто довга')
        .required('Обов\'язкове поле'),
});

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            address: ''
        },
        validationSchema: ValidationSchema,
        onSubmit: (values,{ resetForm }) => {
            console.log(values);
            alert('Дані успішно відправлені!');
            resetForm();
        },
    });

    return (
        <div className="container text-center mt-5">
            <h1>Registration Form</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group row">
                <label htmlFor="firstName" className="col-sm-2 col-form-label">Ім'я</label>
                <div className="col-sm-10">
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder="Введіть ім'я"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-danger">{formik.errors.firstName}</div>
                ) : null}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="lastName" className="col-sm-2 col-form-label">Прізвище</label>
                <div className="col-sm-10">
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    placeholder="Введіть прізвище"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-danger">{formik.errors.lastName}</div>
                ) : null}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Введіть Email"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                ) : null}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="phone" className="col-sm-2 col-form-label">Номер телефону</label>
                <div className="col-sm-10">
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    placeholder="Введіть Номер телефону"
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-danger">{formik.errors.phone}</div>
                ) : null}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Пароль</label>
                <div className="col-sm-10">
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Введіть Пароль"
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                ) : null}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="address" className="col-sm-2 col-form-label">Адреса</label>
                <div className="col-sm-10">
                <input
                    id="address"
                    name="address"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    placeholder="Введіть адресу"
                />
                {formik.touched.address && formik.errors.address ? (
                    <div className="text-danger">{formik.errors.address}</div>
                ) : null}
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Відправити</button>
        </form>
        </div>
    );
};

export default MyForm;
