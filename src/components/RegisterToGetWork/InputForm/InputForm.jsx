import { Formik, Form, Field } from 'formik'
import Button from '../../Button/Button'
import s from './InputForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectInitialValue } from '../../../redux/users/selectors'
import { setInitialValue } from '../../../redux/signup/slice'
const InputForm = () => {
    const initialValues = useSelector(selectInitialValue);

    const dispatch = useDispatch();
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
                    <label className={s.item}>
                        <Field type="radio" name="position" value="frontend"
                        className={s.input} />
                        <span className={s.bullet} aria-hidden="true"></span>
                        <span className={s.text}>Frontend developer</span>
                    </label>

                    <label className={s.item}>
                        <Field type="radio" name="position" value="backend"
                        className={s.input} />
                        <span className={s.bullet} aria-hidden="true"></span>
                        <span className={s.text}>Backend developer</span>
                    </label>

                    <label className={s.item}>
                        <Field type="radio" name="position" value="designer"
                        className={s.input} />
                        <span className={s.bullet} aria-hidden="true"></span>
                        <span className={s.text}>Designer</span>
                    </label>

                    <label className={s.item}>
                        <Field type="radio" name="position" value="qa"
                        className={s.input} />
                        <span className={s.bullet} aria-hidden="true"></span>
                        <span className={s.text}>QA</span>
                    </label>
                </div>
                <Button disabled>Sign up</Button>
            </Form>
        </Formik>
    )
}

export default InputForm
