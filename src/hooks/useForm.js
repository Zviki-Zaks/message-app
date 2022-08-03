import React, { useEffect, useState } from "react"



export const useForm = (state, cb = (fields) => { }) => {
    const [fields, setFields] = useState(state)
    const handelChange = ({ target }) => {
        const filed = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFields({ ...fields, [filed]: value })
    }
    useEffect(() => {
        let isMount = true
        if (isMount === true) {
            isMount = false
            return
        }
        cb(fields)
    }, [fields])

    cb(fields)
    const register = (filed) => {
        return {
            name: filed,
            id: filed,
            value: fields[filed],
            onChange: handelChange
        }
    }
    return { fields, register, setFields }
}