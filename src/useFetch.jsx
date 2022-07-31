import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `http://localhost:8080`

const useFetch = (urlParams, methodType, jsonBody) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)
  const fetchMovies = async (url) => {
    let options = {
        method: methodType,
        headers: {
                'Content-Type': 
                    'application/json;charset=utf-8'
            },
        body: JSON.stringify(jsonBody),
        mode: 'cors'
    }
    setIsLoading(true)
    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (data != null) {
        setData(data.Search || data)

        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])
  return { isLoading, error, data }
}

export default useFetch