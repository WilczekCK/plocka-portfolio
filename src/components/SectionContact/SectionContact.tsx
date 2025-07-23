import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Field, Form, Formik, FormikProps } from "formik";
import PhoneIcon from "../../assets/icons/phone.svg";

import "./SectionContact.scss";

const SectionContact = () => {
  return (
    <div className={"section__contact"}>
      <div className={"section__contact__left"}>
        <p className={"section__contact__left--text"}>
          Wypełnij formularz lub skontaktuj się telefonicznie - stwórzmy razem
          coś niezwykłego! ⭐
        </p>
        <p className={"section__contact__left--action"}>
          <a href="tel:+48500123456">
            <PhoneIcon />
            500 123 456
          </a>
        </p>
      </div>
      <div className={"section__contact__right"}>
        <Formik
          initialValues={{
            email: "",
            name: "",
            message: "",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="name">
                Imię
                <Field as="input" id="name" name="name" disabled={isSubmitting}/>
              </label>

              <label htmlFor="email">
                E-mail
                <Field type="email" id="email" name="email" disabled={isSubmitting}/>
              </label>

              <label htmlFor="message">
                Treść wiadomości
                <Field as="textarea" id="message" name="message" disabled={isSubmitting}/>
              </label>
              
              <button type="submit" className="btn btn--purple" disabled={isSubmitting}>
                {isSubmitting ? "Wysyłanie..." : "Wyślij"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SectionContact;
