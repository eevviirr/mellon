import { AppRouter } from "./app/routes/AppRouter";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <AppRouter />
        </NavigationContainer>
    );
}
