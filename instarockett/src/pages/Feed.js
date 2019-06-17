import React, { Component } from 'react'
import api from '../services/api'
import io from 'socket.io-client'

import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'; 
// OBS: lembrando que ao importar você pode usar as o importado como TAG
// TouchableOpacity é o tipo do botao com efeito
// FlatList ja cria uma lista 
// StyleSheet é para aplicar estilo... precisa criar uma const com StyleSheet.create({})


import camera from '../assets/camera.png'
import more from '../assets/more.png'
import like from '../assets/like.png'
import comment from '../assets/comment.png'
import send from '../assets/send.png'

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({ //CONFIGURAÇOES ESPECIFICAS PARA ESTA TELA
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
        <Image source={camera} />
      </TouchableOpacity>
    ),
  })

  // COPIADO DO FRONTEND // COPIADO DO FRONTEND //            // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
  state = {                                                   // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
    feed: [],                                                 // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
  }                                                           // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
  async componentDidMount() {                                 // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
    const response = await api.get('posts')                   // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
    this.registerToSocket()                                   // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
    this.setState({ feed: response.data })                    // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
  }                                                           // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 

  registerToSocket = () => {                                  // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
    const socket = io('http://192.168.0.18:3333')                // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
    socket.on('post', newPost => {                            // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
      this.setState({ feed: [newPost, ...this.state.feed] })  // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
    })                                                        // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 

    socket.on('like', likedPost => {                          // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
      this.setState({                                         // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
        feed: this.state.feed.map(post =>                     // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
          post._id === likedPost._id ? likedPost : post       // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
        )                                                     // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
      })                                                      // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
    })                                                        // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 
  }                                                           // COPIADO DO FRONTEND // COPIADO DO FRONTEND // 

  handleLike = id => {
    api.post(`/posts/${id}/like`)
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.feed}
          keyExtractor={post => post._id} // Recebe cada item do feed, ou seja cada post e vai retornar qual o ID dele.
          renderItem={({ item }) => ( // Sempre recebe função, com intuito de retornar o conteudo JSX de cada um dos posts // item entre chaves foi destructuring
            <View style={styles.feedItem}>

              <View style={styles.feedItemHeader}>

                <View style={styles.userInfo}>

                  <Text style={styles.name}>{item.author}</Text>
                  <Text style={styles.name}>{item.place}</Text>

                </View>

                <Image source={more} />

              </View>

              <Image style={styles.feedImage} source={{ uri: `http://192.168.0.18:3333/files/${item.image}` }} />

              <View style={styles.feedItemFooter}>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.action} onPress={() => {this.handleLike(item._id)}}>
                    <Image source={like} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.action} onPress={() => { }}>
                    <Image source={comment} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.action} onPress={() => { }}>
                    <Image source={send} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.likes} >{item.likes} curtidas</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.hashtags}>{item.hashtags}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  feedItem: {
    marginTop: 20,
  },

  feedItemHeader: { //TODO ELEMENTO DO REACT NATIVE VEM COM atributo display: 'flex' COMO PADRÃO!
    paddingHorizontal: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 14,
    color: '#000',
  },

  place: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },

  feedImage: {
    width: '100%',
    height: 400,
    marginVertical: 15,
  },

  feedItemFooter: {
    paddingHorizontal: 15,
  },

  actions: {
    flexDirection: 'row',
  },

  action: {
    marginRight: 8,
  },

  likes: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#000',
  },

  description: {
    lineHeight: 18,
    color: '#000',
  },

  hashtags: {
    color: '#7159c1',
  },

})
