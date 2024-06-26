import { useState, useEffect } from "react";
import Loading from "./loading";
import React from 'react'
import Profile from "./Profile"


const Getrepo = () => {
    const [items, setItems] = useState([])
    const [user] = useState("TienNguyenAu")

    useEffect(() => {
    const fetchRepos = async () => {
        const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
        )
        const data = await res.json()
        setItems(data)
        console.log(data)
    }

    fetchRepos()
    }, [user])
  return (
    <>
      <div className="pt-10">
        <h1 className="mb-10 font-bold text-2xl">
            {user}'s repositories
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
          {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  )
}

export default Getrepo