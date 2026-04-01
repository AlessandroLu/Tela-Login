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

export default function TelaRegistro({
  setScreen,
}: {
  setScreen: (screen: string) => void;
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const handleRegistro = () => {
    if (!nome.trim()) {
      Alert.alert("Erro", "Digite seu nome");
      return;
    }
    if (!email.trim()) {
      Alert.alert("Erro", "Digite seu e-mail");
      return;
    }
    if (!senha.trim() || !confirmaSenha.trim()) {
      Alert.alert("Erro", "Digite a senha");
      return;
    }
    if (senha !== confirmaSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
    Alert.alert("Sucesso", `Conta criada para ${nome}!`);
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
          <View style={styles.logoContainer}>
            <View style={styles.logoBg}>
              <Text style={styles.logoEmoji}>✨</Text>
            </View>
          </View>

          <Text style={styles.titulo}>Criar Conta</Text>
          <Text style={styles.subtitulo}>Junte-se ao TaskApp hoje mesmo</Text>

          <View style={styles.spacer} />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome Completo</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Seu nome completo"
                placeholderTextColor="#B0B0B0"
                autoCapitalize="words"
                value={nome}
                onChangeText={setNome}
              />
            </View>
          </View>

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
                placeholder="Crie uma senha forte"
                placeholderTextColor="#B0B0B0"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirme a Senha</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                placeholderTextColor="#B0B0B0"
                secureTextEntry={true}
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.botaoLogin}
            activeOpacity={0.8}
            onPress={handleRegistro}
          >
            <Text style={styles.botaoLoginTexto}>Registrar</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.cadastroBgContainer}>
            <View style={styles.cadastroContainer}>
              <Text style={styles.cadastroTexto}>Já tem uma conta? </Text>
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
