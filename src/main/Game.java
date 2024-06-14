package main;

public class Game {
  private GamePanel gamePanel;
  private GameWindow gameWindow;
  public Game(){
    gamePanel = new GamePanel();
    gameWindow = new GameWindow(gamePanel);

    // Focus on the events added to the gamePanel such as key
    gamePanel.requestFocus();
  }
}
