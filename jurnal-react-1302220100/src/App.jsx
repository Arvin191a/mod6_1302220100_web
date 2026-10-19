export default function App (){

  const N= 10 * 1000;

  const textstyle = {
    color: '#4295f4',
    fontsize: '20px'

}

  return (

    <div className="">
      <h1 className= "JUDUL" style = {textstyle}>arvin</h1>
      <h3>selamat datang</h3>
      <h3>saldo akun ini senilai = {N} </h3>
      <button>klik untuk bayar</button>
    </div>


  )
    }