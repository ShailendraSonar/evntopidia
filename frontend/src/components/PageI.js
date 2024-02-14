import React from 'react'
const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

function PageI(props) {

    const handleChange = (event) => {
        props.setPage1Data({
          ...props.Page1Data,
          [event.target.name]: event.target.value,
        });
        console.log(props.Page1Data);
      };

  return (
    <div className=' h-[70vh]'>
    <form className="mt-8 space-y-6" >
        <input type="email" className={fixedInputClass} placeholder='Email Address' name='MemberEmail' onChange={handleChange} onBlur={handleChange} />
        <input type="password" className={fixedInputClass} placeholder='Password' name='MemberPassword' onChange={handleChange} onBlur={handleChange} />
        <input type="text" className={fixedInputClass} placeholder='Role' name='MemberRole' onChange={handleChange}/>
        <input type="text" className={fixedInputClass} placeholder='companyName' name='companyName' onChange={handleChange}/>
        <input type="text" className={fixedInputClass} placeholder='industryType' name='industryType' onChange={handleChange}/>
        <input type="text" className={fixedInputClass} placeholder='personName' name='personName' onChange={handleChange}/>
        <input type="text" className={fixedInputClass} placeholder='Contact Number' name='contactNumber' onChange={handleChange}/>
        </form>
    </div>
  )
}

export default PageI