'use client'

interface AddToCartProps {
  buttonClassName?: string;
}

const AddToCart = ({ buttonClassName }: AddToCartProps) => {
  const handleClick = () => {
    console.log('Producto añadido al carrito');
  }

  return (
    <button className={buttonClassName} onClick={handleClick}>
      Add to Cart
    </button>
  )
}

export default AddToCart