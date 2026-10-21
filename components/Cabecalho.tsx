import { StyleSheet, Text, View } from 'react-native';

interface Props {
  quantidadeCarrinho: number;
}

export default function Cabecalho({ quantidadeCarrinho }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Loja</Text>
      <View style={styles.carrinho}>
        <Text style={styles.carrinhoTexto}>🛒 {quantidadeCarrinho}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  carrinho: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  carrinhoTexto: {
    fontSize: 16,
    fontWeight: '600',
  },
});
