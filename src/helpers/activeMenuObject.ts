
type menuOptions = '' | 'all' | 'cat' | 'dog' | 'fish' // criamos um type para definir que o activeMenu só pode receber essas opções

export const activeObject = (activeMenu: menuOptions) => {
    let returnObject = { // crio um objeto que recebe as opções como falso
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

     if(activeMenu !== '' ){// se active menu for diferente de vazio
            returnObject[activeMenu] = true //activeMenu retorna true
        }


    return returnObject // retorno ele

}