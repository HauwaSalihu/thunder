import React from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  
    formData.append("access_key", "4ad9c441-7400-4a0d-9abf-8a46b1503b9f");
  
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
   
 
    <div className=' bg-white w-full px-[12%] py-40 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect With Us</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get In Touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
    Get in touch to schedule a consultation or ask any questions you may have. We're here to help!
      </p>

      <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" name='name' placeholder='Enter your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />
          <input type="email" name='email' placeholder='Enter your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />
        </div>
        <textarea rows={6} placeholder='Enter Your Message' name='message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'></textarea>

        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-blue-700 text-white rounded-full mx-auto  duration-500'>
          Submit now
        </button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>

  )
}

export default Contact