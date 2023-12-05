const Contact = () => {
  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='john@gmail.com'
              required
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <input
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
            />
          </label>
          <button
            type='submit'
            className='btn'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact