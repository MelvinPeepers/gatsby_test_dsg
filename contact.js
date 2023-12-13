import * as React from "react";
// import useForm from "../utils/useForm";

// function encode(data) {
//     return Object.keys(data)
//       .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//       .join('&')
//   }

//   export default function Contact() {
//     const [state, setState] = React.useState({})

//     const handleChange = (e) => {
//       setState({ ...state, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = (e) => {
//       e.preventDefault()
//       const form = e.target
//       fetch('/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: encode({
//           'form-name': form.getAttribute('name'),
//           ...state,
//         }),
//       })
//         .then(() => navigate(form.getAttribute('action')))
//         .catch((error) => alert(error))
//     }

//     return (
//       <div>
//         <h1>Contact</h1>
//         <form
//           method="post"
//           netlify-honeypot="bot-field"
//           data-netlify="true"
//           name="testimonials"
//           onSubmit={handleSubmit}
//         >
//           {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
//           <input type="hidden" name="form-name" value="contact" />
//           <p hidden>
//             <label>
//               Don’t fill this out: <input name="bot-field" onChange={handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your name:
//               <br />
//               <input type="text" name="name" onChange={handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your email:
//               <br />
//               <input type="email" name="email" onChange={handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Message:
//               <br />
//               <textarea name="message" onChange={handleChange} />
//             </label>
//           </p>
//           <p>
//             <button type="submit">Send</button>
//           </p>
//         </form>
//       </div>
//     )
//   }

export default function TestimonialForm() {
  // const { values, updateValue } = useForm({
  //   name: '',
  //   message: '',
  // })
  // const { contact, error, loading, errMessage, submitContact } = useContact({
  //   values,
  // })
  // console.log(contact, error, loading, submitContact)
  // if (errMessage) {
  //   return <p>{errMessage}</p>
  // }

  return (
    <div>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="testimonialone"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="testimonialone" />
        <legend>Share With Others How We Have Impacted Your Life</legend>
        <div className="nameEmail">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="required"
            required
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="How has Kinna's House of Love helped you?"
            className="required"
            required
          />
        </div>
        <button type="submit" value="Submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
