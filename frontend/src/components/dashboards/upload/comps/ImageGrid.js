import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
const ImageGrid = ({ setSelectedImg, detay }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <div>
        <motion.div className="img-wrap" key={doc.id} 
          onClick={() => setSelectedImg(doc.url)
          }
          whileHover={{ opacity: 1 }}s
        >
        <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
          <p  className="img-wrap" >a  aaa aaa a a a a a a </p>
        </motion.div>
     </div>
      ))}

    </div>
  )
}

export default ImageGrid;