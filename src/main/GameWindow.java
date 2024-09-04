package main;

import javax.swing.*;

public class GameWindow {
  private JFrame jFrame;
  public GameWindow(GamePanel gamePanel){
    jFrame = new JFrame();
    jFrame.setSize(400, 400);
    jFrame.setVisible(true);
    jFrame.add(gamePanel);

    jFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }
}
