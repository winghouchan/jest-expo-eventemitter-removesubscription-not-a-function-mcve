import { render } from "@testing-library/react-native";
import { useLocales } from "expo-localization";
import { Text } from "react-native";

function Component() {
  const locales = useLocales();

  return <Text>{JSON.stringify(locales, null, 2)}</Text>;
}

test("1 + 1", () => {
  render(<Component />);
});
