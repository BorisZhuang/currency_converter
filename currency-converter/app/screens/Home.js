import React, { Component } from "react";
import PropTypes from "prop-types";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";

const INIT_BASE_CURRENCY = "USD";
const INIT_QUOTE_CURRENCY = "GBP";
const INIT_BASE_PRICE = "100";
const INIT_QUOTE_PRICE = "79.74";
const INIT_CONVERSION_RATE = 0.7974;
const INIT_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Base Currency" });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate("CurrencyList", { title: "Quote Currency" });
  };

  handleTextChange = text => {
    console.log("text changed", text);
  };

  handleSwapCurrency = () => {
    console.log("swap currency pressed.");
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate("Options");
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={INIT_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            onChangeText={this.handleTextChange}
            defaultValue={INIT_BASE_PRICE}
            keyboardType="numeric"
          />
          <InputWithButton
            buttonText={INIT_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={INIT_QUOTE_PRICE}
            editable={false}
          />
          <LastConverted
            base={INIT_BASE_CURRENCY}
            quote={INIT_QUOTE_CURRENCY}
            date={INIT_CONVERSION_DATE}
            conversionRate={INIT_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
