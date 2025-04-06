import React from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  
    formData.append("access_key", "57e853b0-bff9-4a2a-a7ca-e85be5a2e415");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect With Us</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get In Touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Get in Touch to Sign up for early access to our savings and investment features, or get in touch to partner with us.
      </p>

      <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" name='name' placeholder='Enter your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />
          <input type="email" name='email' placeholder='Enter your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />
        </div>
        <textarea rows={6} placeholder='Enter Your Message' name='message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'></textarea>

        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-orange-700 text-white rounded-full mx-auto  duration-500'>
          Submit now
        </button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact