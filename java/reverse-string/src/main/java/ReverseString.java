import java.util.Arrays;
public class ReverseString {

    public String reverse(String inputString) {
        if(inputString == null) {
            return null;
        }

        StringBuilder output = new StringBuilder(inputString).reverse();
        return output.toString();
    }
  
}
