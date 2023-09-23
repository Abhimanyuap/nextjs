
import { useRouter } from 'next/router'
import React from 'react'

const blog_slug = () => {

    const router = useRouter();

    let slug = router.query.blog_slug;

  return (
    <div>
      This is the {slug}
    </div>
  )
}

export default blog_slug
