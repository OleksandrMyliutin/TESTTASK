import { Formik, Form, Field } from 'formik'
import Button from '../../Button/Button'
import s from './InputForm.module.css'
import { useDispatch, useSelector } from 'react-redux'

import { resetInitialValue, setInitialValue } from '../../../redux/signup/formSlice'
import { selectInitialValue, selectLoader, selectPositions} from '../../../redux/selectors'
import { useEffect } from 'react'
import { fetchPositions, submitFromStore } from '../../../redux/operations'
import Loader from '../../Loader/Loader'
import toast from 'react-hot-toast'
const InputForm = () => {
    const initialValues = useSelector(selectInitialValue);
    const dispatch = useDispatch();
    const positions = useSelector(selectPositions);
    const isLoading = useSelector(selectLoader);
    useEffect(()=>{
        if (!positions.length) {
        dispatch(fetchPositions(positions));
    }
    },[dispatch, positions]);

    const handleSubmit = (values, actions) => {
		dispatch(setInitialValue(values));
        dispatch(submitFromStore())
        .unwrap()
        .then(() => {
            actions.resetForm();
            toast.success('User successfully registered', { id: 'signup-ok' });
            dispatch(resetInitialValue());
        })
        .catch((e) => {toast.error(String(e), { id: 'signup-err' })})
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
                {isLoading && <Loader/>}
                {!isLoading && <Button disabled>Sign up</Button>}
            </Form>
        </Formik>
    )
}

export default InputForm
