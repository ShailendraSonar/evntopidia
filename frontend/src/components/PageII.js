import React from 'react'
const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

function PageII(props) {

    const handleChange = (event) => {
        const { name, value } = event.target;
        const [field, key] = name.split('.');
    
        props.setPage2Data(prevState => ({
          ...prevState,
          [field]: {
            ...prevState[field],
            [key]: value,
          },
        }));
        console.log(props.Page2Data);
      };

      const handleChangePosition = (event) => {
        props.setPage2Data({
          ...props.Page2Data,
          [event.target.name]: event.target.value,
        });
      };

  return (
    <div className=' h-[70vh]'>
    <form className="mt-8 space-y-6" >
        <input type="text" className={fixedInputClass} placeholder='position' name='position' onChange={handleChangePosition} />
        <input type="text" className={fixedInputClass} placeholder='what is your name' name='QuestionaireResponse.ans1' onChange={handleChange}/>
        <input type="text" className={fixedInputClass} placeholder='industryType' name='QuestionaireResponse.ans2' onChange={handleChange}/>
        <input type="text" className={fixedInputClass} placeholder='your hobbies' name='QuestionaireResponse.ans3' onChange={handleChange}/>
        <input type="text" className={fixedInputClass} placeholder='name some places' name='QuestionaireResponse.ans4' onChange={handleChange}/>
        <input type="text" className={fixedInputClass} placeholder='xyz' name='QuestionaireResponse.ans5' onChange={handleChange}/>
        </form>
    </div>
  )
}

export default PageII