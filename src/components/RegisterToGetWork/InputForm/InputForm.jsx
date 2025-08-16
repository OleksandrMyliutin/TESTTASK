import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import Button from '../../Button/Button'
import s from './InputForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { resetInitialValue, setInitialValue } from '../../../redux/signup/formSlice'
import { selectInitialValue, selectPositions, selectSubmitting} from '../../../redux/selectors'
import { useEffect } from 'react'
import { fetchPositions, submitFromStore } from '../../../redux/operations'
import Loader from '../../Loader/Loader'
import toast from 'react-hot-toast'
import svg from '../../../assets/icons/success-image.svg'

const InputForm = () => {
    const initialValues = useSelector(selectInitialValue);
    const isSubmitting  = useSelector(selectSubmitting);
    const dispatch = useDispatch();
    const positions = useSelector(selectPositions);
    useEffect(()=>{
        if (!positions.length) {
        dispatch(fetchPositions());
    }
    },[dispatch, positions.length]);

    const handleSubmit = (values, actions) => {
		dispatch(setInitialValue(values));
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value);
        });
        dispatch(submitFromStore(formData))
        .unwrap()
        .then(() => {
            actions.resetForm();
            dispatch(resetInitialValue());

            toast.success(
            <div style={{ textAlign: "center" }}>
                <h3 style={{ marginBottom: "10px" }}>User successfully registered 🎉</h3>
                <img
                src={svg}
                alt="Success"
                style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
                />
            </div>,
            {
                id: "signup-success",
                duration: 4000,
                style: {
                padding: "20px",
                maxWidth: "400px",
                minWidth: "320px",
                },
            }
            );
        })
        .catch((e) => {toast.error(String(e), { id: 'signup-err' })})
	};

    const schema = Yup.object({
        username:   Yup.string().min(2, "Too Short!").max(50, "Too Long!").required('Required'),
        email:      Yup.string().email('Invalid email').required('Required'),
        phone:      Yup.string().matches(/^\+380\d{9}$/, 'Format +380XXXXXXXXX').required('Required'),
        position_id:Yup.string().required('Required'),
        photo:      Yup.mixed().required('Required')
            .test('fileType', 'Only jpg/jpeg', v => !v || /image\/jpe?g$/.test(v.type))
            .test('fileSize', 'Max 5MB', v => !v || v.size <= 5_000_000),
    });

    return (
        <Formik initialValues={initialValues} validationSchema={schema}  validateOnMount onSubmit={handleSubmit}>
            {({ isValid, dirty, touched, errors }) => <Form className={s.form}>
                <div>
                    <label className={s.labelWrapper}>
                        <span className={s.labelText}>Username</span>
                        <Field
                            type="text"
                            name="username"
                            placeholder="Your name"
                            className={`${s.field} ${touched.username && errors.username ? s.errorField : ""}`}
                            autoComplete="off"
                        />
                        <ErrorMessage name="username" component="span" className={s.errorText} />
                    </label>
                </div>
                <div>
                    <label className={s.labelWrapper}>
                        <span className={s.labelText}>Email</span>
                        <Field type="email" name="email" placeholder="Email" className={`${s.field} ${touched.email && errors.email ? s.errorField : ""}`} autoComplete="off"/>
                        <ErrorMessage name="email" component="span" className={s.errorText} />
                    </label>
                </div>
                <div className={`${s.inputWrapper} ${touched.phone && errors.phone ? s.errorWrapper : ""}`}>
                    <label className={s.labelWrapper}>
                        <span className={s.labelText}>Phone</span>
                        <Field type="tel" name="phone" placeholder="Phone" className={`${s.field} ${touched.phone && errors.phone ? s.errorField : ""}`} autoComplete="off"/>
                        <ErrorMessage name="phone" component="span" className={s.errorText} />
                    </label>
                </div>
                <div className={s.radioGroup}>
                    {positions.map(({ id, name }) => 
                        (<label className={s.item} key={id}>
                            <Field type="radio" name="position_id" value={String(id)} className={s.input} />
                            <span className={s.bullet} aria-hidden="true"></span>
                            <span className={s.text}>{name}</span>
                        </label>))}
                        <ErrorMessage name="position_id" component="span" className={s.errorText} />
                </div>
                <Field name="photo">
                    {({ form, meta  }) => (
                        <div className={s.uploadWrapper}>
                            <label className={`${s.uploadBox} ${meta.touched && meta.error ? s.errorField : ""}`}>
                            <input
                                name="photo"
                                type="file"
                                accept="image/jpeg,image/jpg"
                                hidden
                                onChange={(e) =>
                                form.setFieldValue('photo', e.currentTarget.files?.[0] ?? null)
                                }
                            />
                            <span className={s.uploadBtn}>Upload</span>
                            <span className={s.uploadPlaceholder}>
                                {form.values.photo ? form.values.photo.name : 'Upload your photo'}
                            </span>
                            </label>
                            <ErrorMessage name="photo" component="span" className={s.errorText} />
                        </div>
                    )}
                    </Field>
                {isSubmitting && <Loader/>}
                {!isSubmitting && <Button type="submit" disabled={isSubmitting || !isValid || !dirty}>Sign up</Button>}
            </Form>}
        </Formik>
    )
}

export default InputForm
