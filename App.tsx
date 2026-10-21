import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Busca from './components/Busca';
import ListaProdutos from './components/ListaProdutos';
import { Produto, produtos } from './data/produtos';

export default function App() {
  const [busca, setBusca] = useState('');
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  const produtosFiltrados = produtos.filter((p) =>
    p.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  function comprar(produto: Produto) {
    setCarrinho((atual) => [...atual, produto]);
  }

  return (
    <View style={styles.container}>
      <Cabecalho quantidadeCarrinho={carrinho.length} />
      <Busca valor={busca} aoMudar={setBusca} />
      <ListaProdutos produtos={produtosFiltrados} aoComprar={comprar} />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 60,
    paddingHorizontal: 10,
  },
});
