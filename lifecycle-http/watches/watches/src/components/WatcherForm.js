import React from 'react'

function WatcherForm() {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit();
      }

    return (
        <form className='add-form' onSubmit={#/}>
      { fields.map((o) => 
        <InputField {...o} onChange={handleChange} key={o.name}/>
      )}
      <button type='submit'>{submitBtnText}</button>
    </form>
    )
}

export default WatcherForm
