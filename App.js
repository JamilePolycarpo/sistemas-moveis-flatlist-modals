import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({nome,city,link}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={city}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
      
  
        {
            "id": 1,
            "first_name": "Harry ",
            "last_name": "Potter",
            "city": "London",
            "avatar": "https://sm.ign.com/t/ign_br/screenshot/default/harry-potter-hbo-max_q8yn.h960.jpg"
            
         
        },
        {
            "id": 2,
            "first_name": "Dom",
            "last_name": "Quixote",
            "city": "Madri",
            "avatar": "https://cdn.pensador.com/img/authors/do/mq/dom-quixote-l.jpg"
        },
         {
            "id": 3,
            "first_name": "Joan ",
            "last_name": "of Arc",
            "city": "Paris",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/7/75/Albert_Lynch_-_Jeanne_d%27Arc.jpg"
        
        },
 {
            "id": 4,
            "first_name": "Rosa ",
            "last_name": "Park",
            "city": "Alabama",
            "avatar": "https://media.gazetadopovo.com.br/2013/02/rosa_parks_040213-1.0.111437491-gpMedium.jpg"
        
        },
{
            "id": 5,
            "first_name": "Bruce ",
            "last_name": "Wayne",
            "city": "GotamCity",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFBNaazLypBUyUkn2WyRsoT3Hb4xKzWKqog&usqp=CAU"

        
        },
        {
            "id": 6,
            "first_name": "Tony",
            "last_name": "Stark",
            "city": "New York",
            "avatar": "https://s2.glbimg.com/6r7EXCo-eLrg6nWbSkGLTYB9KBo=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/B/O/MSPOfAQfAtCmBYfTZpDg/tony-star-homem-de-ferro-1-div-paramount.jpg"
        
        },
        {
            "id": 7,
            "first_name": "Nelson",
            "last_name": "Mandela",
            "city": "Johanesburgo",
            "avatar": "https://upload.wikimedia.org/wikipedia/commons/1/14/Nelson_Mandela-2008_%28edit%29.jpg"
        
        },
  
    ];



//item com uma arrow function
/*const meuItemObj = ({item}) => (
  <View>
      <Text style={styles.paragraph}>{item.title}</Text>
    </View>
)*/



export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    let nomeCompleto = item.first_name + " " + item.last_name
    
    return(
      <Pessoa nome={nomeCompleto} 
              city={item.city} 
              link={item.avatar}
              
      />
    )
  }
  

  return (

    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
