import { Formik, Form, Field } from 'formik'
import Button from '../../Button/Button'
import s from './InputForm.module.css'
import { useDispatch, useSelector } from 'react-redux'

import { setInitialValue } from '../../../redux/signup/formSlice'
import { selectInitialValue, selectPositions } from '../../../redux/selectors'
import { useEffect } from 'react'
import { fetchPositions } from '../../../redux/operations'
const InputForm = () => {
    const initialValues = useSelector(selectInitialValue);
    const dispatch = useDispatch();
    const positions = useSelector(selectPositions);

    useEffect(()=>{
        if (!positions.length) {
        dispatch(fetchPositions(positions));
    }
    },[dispatch, positions]);

    const handleSubmit = (values, actions) => {
		dispatch(setInitialValue(values));
		actions.resetForm();
	};


    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form}>
                <div>
                    <label className={s.labelWrapper}>
                        <span className={s.labelText}>Username</span>
                        <Field
                            type="text"
                            name="username"
                            placeholder="Your name"
                            className={s.field}
                        />
                    </label>
                </div>
                <div>
                    <label className={s.labelWrapper}>
                        <span className={s.labelText}>Email</span>
                        <Field type="email" name="email" placeholder="Email" className={s.field}/>
                    </label>
                </div>
                <div className={ s.inputWrapper}>
                    <label className={s.labelWrapper}>
                        <span className={s.labelText}>Phone</span>
                        <Field type="tel" name="phone" placeholder="Phone" className={s.field}/>
                    </label>
                </div>
                <div className={s.radioGroup}>
                    {positions.map(({ id, name }) => 
                        (<label className={s.item} key={id}>
                            <Field type="radio" name="position_id" value={String(id)} className={s.input} />
                            <span className={s.bullet} aria-hidden="true"></span>
                            <span className={s.text}>{name}</span>
                        </label>))}
                </div>
                <Field name="photo">
                    {({ form }) => (
                        <label className={s.uploadBox}>
                        <input
                            name="photo"
                            type="file"
                            accept="image/*"
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
                    )}
                    </Field>
                <Button disabled>Sign up</Button>
            </Form>
        </Formik>
    )
}

export default InputForm
