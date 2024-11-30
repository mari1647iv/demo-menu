let name = "Igor"

function getName() {
  let name = "Victor"

  console.log(name) // Victor
  console.log(this.name) // Victor
}

const getName_arr = () => { // нет своего this, берет this от родительского (вышестоящего) блока
  let name = "Vasya"

  console.log(name) // Vasya
  console.log(this.name) // Igor
}

const getName_custom = getName_arr.bind({name: "Name of this component Dmitryi"})

// this.handleClick = this.handleClick.bind(this.state)

getName_custom()  // Vasya Dmitryi

// function getName_custom() {
  // let name = "Vasya"
  // this = {name: "Dmitryi"}

  // console.log(name) // Vasya
  // console.log(this.name) // Dmitryi
//}