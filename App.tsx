import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundGradient} />
        <View style={styles.backgroundBlob1} />
        <View style={styles.backgroundBlob2} />
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.conteudo}>
          <View style={styles.logoContainer}>
            <View style={styles.logoBg}>
              <Text style={styles.logoEmoji}>👤</Text>
            </View>
          </View>

          <Text style={styles.titulo}>Bem-vindo ao TaskApp</Text>
          <Text style={styles.subtitulo}>
            Organize suas tarefas e aumente sua produtividade
          </Text>

          <View style={styles.spacer} />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="seu.email@exemplo.com"
                placeholderTextColor="#B0B0B0"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#B0B0B0"
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.esqueceuSenha}>
            <Text style={styles.esqueceuSenhaTexto}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoLogin} activeOpacity={0.8}>
            <Text style={styles.botaoLoginTexto}>Entrar </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.cadastroBgContainer}>
            <View style={styles.cadastroContainer}>
              <Text style={styles.cadastroTexto}>Novo por aqui? </Text>
              <TouchableOpacity>
                <Text style={styles.cadastroLink}>Crie uma conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },
  backgroundGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    backgroundColor: "#1E3A8A",
  },
  backgroundBlob1: {
    position: "absolute",
    top: -50,
    right: -80,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#3B82F6",
    opacity: 0.3,
  },
  backgroundBlob2: {
    position: "absolute",
    bottom: -100,
    left: -100,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#2563EB",
    opacity: 0.2,
  },
  scrollContainer: {
    flex: 1,
  },
  conteudo: {
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
    marginTop: 0,
  },
  logoBg: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoEmoji: {
    fontSize: 64,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subtitulo: {
    fontSize: 16,
    color: "#CBD5E1",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 24,
  },
  spacer: {
    height: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#F1F5F9",
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#334155",
  },
  inputIcon: {
    marginRight: 10,
    fontSize: 18,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: "#F1F5F9",
  },
  esqueceuSenha: {
    alignSelf: "flex-end",
    marginBottom: 28,
    marginTop: 8,
  },
  esqueceuSenhaTexto: {
    color: "#60A5FA",
    fontSize: 14,
    fontWeight: "600",
  },
  botaoLogin: {
    backgroundColor: "#3B82F6",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 28,
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  botaoLoginTexto: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: "#334155",
    marginBottom: 24,
  },
  cadastroBgContainer: {
    backgroundColor: "#1E293B",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#334155",
  },
  cadastroContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cadastroTexto: {
    color: "#94A3B8",
    fontSize: 15,
  },
  cadastroLink: {
    color: "#60A5FA",
    fontSize: 15,
    fontWeight: "700",
  },
});
