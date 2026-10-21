import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Produto } from '../data/produtos';

interface Props {
  produto: Produto;
  aoComprar: (produto: Produto) => void;
}

function formatarPreco(valor: number) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

export default function ProdutoCard({ produto, aoComprar }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: produto.imagem }} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.titulo} numberOfLines={2}>
        {produto.titulo}
      </Text>
      <Text style={styles.preco}>{formatarPreco(produto.preco)}</Text>
      <Pressable
        style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
        onPress={() => aoComprar(produto)}
      >
        <Text style={styles.botaoTexto}>Comprar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    margin: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  imagem: {
    width: '100%',
    height: 120,
    marginBottom: 8,
  },
  titulo: {
    fontSize: 14,
    color: '#374151',
    minHeight: 36,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16a34a',
    marginVertical: 8,
  },
  botao: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoPressionado: {
    opacity: 0.7,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: '600',
  },
});
