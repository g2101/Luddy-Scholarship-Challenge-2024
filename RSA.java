import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Scanner;

public class RSA {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println(
      "Welcome to the RSA Encryption, Decryption, and Generation System."
    );
    int choice = 0;
    returnKeys();

    do {
      System.out.println(
        "You may (1) generate keys, (2) encrypt using your keys, (3) decrypt using your keys."
      );

      try {
        System.out.print("Enter your choice: ");
        choice = sc.nextInt();
      } catch (java.util.InputMismatchException e) {
        System.out.println("Invalid input. Please enter a valid integer.");
      }

      break;
    } while (!(sc.nextLine().contentEquals("q")));
    System.out.println(choice);
  }

  public static int returnKeys() {
    KeyPairGenerator generator;
    try {
      generator = KeyPairGenerator.getInstance("RSA");
      generator.initialize(2048);
      KeyPair pair = generator.generateKeyPair();
      PrivateKey privateKey = pair.getPrivate();
      PublicKey publicKey = pair.getPublic();
      System.out.println(publicKey.toString());
      System.out.println(privateKey.toString());
    } catch (NoSuchAlgorithmException e) {}
    return 0;
  }
}
// https://www.baeldung.com/java-rsa
