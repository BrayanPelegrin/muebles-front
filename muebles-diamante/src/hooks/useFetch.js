import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
      data: null,
      isLoading: false,
      hasError: null,
    })

    const getData = async() => {
      try {
        setState({
          ...state,
          isLoading: true
        })

        const data = await fetch(url)
        const results = await data.json()

        setState({
          data:results,
          isLoading:false,
          hasError:null
        })

      } catch (error) {
        setState({ 
          data:null,
          isLoading:false,
          hasError:error,  
        })
      }

    }

    useEffect( () => {
      getData()
    }, [url])

    return {
      ...state
    }
}
