export const validateEmail = value => {
    let error = ""
    if (!value) {
      error = "Please enter email address."
    } else if (value.length > 50) {
      error = "Length can not exceed above 50 characters."
    }
    else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = ""
    } else {
      error = "Please enter valid email address."
    }
    return error
  }
  
  export const validateRequiredField = value => {
    let error = ""
    if (value.val === null || value.val === undefined || value.val === "" ) {
      error = `Please enter ${value.key}.`
    }
    else if (value.val.length > 25 && !value.key.includes('Address')) {
      if (value.key === 'Location' || value.key === "Postal Code" || value.key === 'City' || value.key === 'Country') {
        error = validateLength(value.val)
      }else{
        error = "Length can not exceed above 25 characters."
      }
    } else if (value.val.length > 50) {
      if (!value.key.includes('Address')) {
        error = validateLength(value.val)
      }else{
        error = "Length can not exceed above 50 characters."
      }
    }
    return error
  }
  
  export const validateLength = value => {
    let error = ""
    if (value) {
      if (value.length > 50) {
        error = `Length can not exceed above 50 characters.`
      }
    }
    return error
  }
    
  export const validatePhone = value => {
    let error = ""
    let phoneno = /^\d{10}$/
    if (!value) {
      error = "Phone number is required."
      } else if (phoneno.test(value)) {
      error = ""
      } else {
      error = "Please enter valid Phone number"
    }
    return error
  
  }