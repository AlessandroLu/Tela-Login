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

export default function TelaRecuperarSenha({
  setScreen,
}: {
  setScreen: (screen: string) => void;
}) {
  const [email, setEmail] = useState("");

  const handleEnviarLink = () => {
    if (!email.trim()) {
      Alert.alert("Erro", "Digite seu e-mail");
      return;
    }
    Alert.alert("Sucesso", `Link enviado para ${email}`);
    setScreen("login");
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
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => setScreen("login")}
          >
            <Text style={styles.botaoVoltarTexto}>Voltar</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <View style={styles.logoBg}>
              <Text style={styles.logoEmoji}>🔑</Text>
            </View>
          </View>

          <Text style={styles.titulo}>Recuperar Senha</Text>
          <Text style={styles.subtitulo}>
            Digite seu e-mail para receber instruções
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

          <Text style={styles.textoInfo}>
            Enviaremos um link para redefinir sua senha no e-mail fornecido.
          </Text>

          <TouchableOpacity
            style={styles.botaoLogin}
            activeOpacity={0.8}
            onPress={handleEnviarLink}
          >
            <Text style={styles.botaoLoginTexto}>Enviar Link</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.cadastroBgContainer}>
            <View style={styles.cadastroContainer}>
              <Text style={styles.cadastroTexto}>Lembrou a senha? </Text>
              <TouchableOpacity onPress={() => setScreen("login")}>
                <Text style={styles.cadastroLink}>Faça login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
