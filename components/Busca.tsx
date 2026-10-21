import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
  valor: string;
  aoMudar: (texto: string) => void;
}

export default function Busca({ valor, aoMudar }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        placeholderTextColor="#9ca3af"
        value={valor}
        onChangeText={aoMudar}
      />
      {valor.length > 0 && (
        <Pressable onPress={() => aoMudar('')} style={styles.limpar}>
          <Text style={styles.limparTexto}>✕</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#1f2937',
  },
  limpar: {
    padding: 6,
  },
  limparTexto: {
    fontSize: 16,
    color: '#6b7280',
  },
});
