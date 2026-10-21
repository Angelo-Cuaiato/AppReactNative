import { FlatList, StyleSheet, Text } from 'react-native';
import { Produto } from '../data/produtos';
import ProdutoCard from './ProdutoCard';

interface Props {
  produtos: Produto[];
  aoComprar: (produto: Produto) => void;
}

export default function ListaProdutos({ produtos, aoComprar }: Props) {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => <ProdutoCard produto={item} aoComprar={aoComprar} />}
      ListEmptyComponent={<Text style={styles.vazio}>Nenhum produto encontrado.</Text>}
      contentContainerStyle={styles.lista}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingBottom: 24,
  },
  vazio: {
    textAlign: 'center',
    color: '#6b7280',
    marginTop: 40,
    fontSize: 16,
  },
});
