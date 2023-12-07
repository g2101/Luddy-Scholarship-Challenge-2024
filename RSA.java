import java.io.FileOutputStream;
import java.io.IOException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Scanner;

public class RSA {

  public static void main(String[] args) throws NoSuchAlgorithmException {
    Scanner sc = new Scanner(System.in);
    KeyPair pair = null;

    System.out.println("Welcome to the RSA Encryption, Decryption, and Generation System.");

    do {
      System.out.println("You may (1) generate keys, (2) view your keys, (3) encrypt using your keys, (4) decrypt using your keys, (5) save your keys to a file.");
      
      checkChoice(sc, pair);

      break;
    } while (!(sc.nextLine().contentEquals("q")));
    
  }

  public static void viewKeys(KeyPair pair) {
    PublicKey publicKey = pair.getPublic();
    PrivateKey privateKey = pair.getPrivate();

    System.out.println("The public key is: " + publicKey + "\n");
    System.out.println("The private key is: " + privateKey + "\n");
  }

  public static void checkChoice(Scanner sc, KeyPair pair) throws NoSuchAlgorithmException {
    int choice = 0;
    try {
        System.out.print("Enter your choice: ");
        choice = sc.nextInt();
      } catch (java.util.InputMismatchException e) {
        System.out.println("Invalid input. Please enter a valid integer.");
      }
      if (choice == 1) {
        pair = generateKeys();
        System.out.println("Keys generated and saved.");
      }
      if (choice == 2) {
        if (pair == null) {
          System.out.println("No keys generated. Generating pair now to view.");
          pair = generateKeys();
        }
        viewKeys(pair);
      }
      else {
        System.out.println("Invalid input. Please input a valid integer.");
      }
      choice = 0;
      checkChoice(sc, pair);
  }

  public static KeyPair generateKeys() throws NoSuchAlgorithmException {
    KeyPairGenerator generator;
    generator = KeyPairGenerator.getInstance("RSA");
    generator.initialize(2048);

    KeyPair pair = generator.generateKeyPair();

    return pair;
  }

  public static void saveKeys(KeyPair pair) throws IOException {
    PublicKey publicKey = pair.getPublic();
    PrivateKey privateKey = pair.getPrivate();

    try (FileOutputStream writer = new FileOutputStream("public.key")) {
    writer.write(publicKey.getEncoded());
    }
    try (FileOutputStream writer = new FileOutputStream("private.key")) {
    writer.write(privateKey.getEncoded());
    }

  }
}
// https://www.baeldung.com/java-rsa
