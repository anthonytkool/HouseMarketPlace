import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

function Contact() {
  const [landlord, setLandlord] = useState(null)
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, 'users', params.landlordId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setLandlord(docSnap.data())
      } else {
        toast.error('Could not get landlord data')
      }
    }

    getLandlord()
  }, [params.landlordId])

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Contact LandLord</p>
      </header>

      {landlord !== null && (
        <main>
          <div className='contactLandlord'>
            <div className='item first'>CONTACT : {landlord?.name}</div>
          </div>
          <div className='contactLandlord'>
            <div className='item second'>EMAIL : {landlord?.email}</div>
          </div>
          <h1>2nd Email: anthonytcool@hotmail.com</h1>
          <h1>Line ID: tcoolofficial</h1>
          <h1>Phone: +66 093 - 62 77 009</h1>
          <h1>Facebook: Anthony T Cool</h1>
          <h1>Facebook Link: https://www.facebook.com/anthony.cool.9465</h1>
        </main>
      )}
    </div>
  )
}

export default Contact
