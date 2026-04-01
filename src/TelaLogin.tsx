import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Alert,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";

export default function TelaLogin({
  setScreen,
}: {
  setScreen: (screen: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!email.trim()) {
      Alert.alert("Erro", "Digite seu e-mail");
      return;
    }
    if (!senha.trim()) {
      Alert.alert("Erro", "Digite sua senha");
      return;
    }
    Alert.alert("Sucesso", `Bem-vindo, ${email}!`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
                value={email}
                onChangeText={setEmail}
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
                value={senha}
                onChangeText={setSenha}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.esqueceuSenha}
            onPress={() => setScreen("recuperarSenha")}
          >
            <Text style={styles.esqueceuSenhaTexto}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoLogin}
            activeOpacity={0.8}
            onPress={handleLogin}
          >
            <Text style={styles.botaoLoginTexto}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.cadastroBgContainer}>
            <View style={styles.cadastroContainer}>
              <Text style={styles.cadastroTexto}>Novo por aqui? </Text>
              <TouchableOpacity onPress={() => setScreen("registro")}>
                <Text style={styles.cadastroLink}>Crie uma conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
