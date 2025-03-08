import Form from 'next/form'
 
export default function Page() {
  return (
    <div className="space y-16">
    <Form action="/search" className='grid gap-4'>
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
    
         <input name="first_name" placeholder='First Name'/>
         <input name="last_name" placeholder='Last Name'/>
         <input name="email" placeholder='Email'/>
         <input name="Phone_number" placeholder='Phone Number'/>
         <button type="submit">Submit</button>
      
    </Form>
    </div>
  )
}