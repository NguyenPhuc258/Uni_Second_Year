package inputs;

import main.GamePanel;

import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;

public class MouseInputs implements MouseListener, MouseMotionListener {
  private GamePanel gamePanel;
  public MouseInputs(GamePanel gamePanel){
    this.gamePanel = gamePanel;
  }

  // Mouse Listener events
  @Override
  public void mouseClicked(MouseEvent e) {
    System.out.println("Mouse clicked!");
  }

  @Override
  public void mousePressed(MouseEvent e) {

  }

  @Override
  public void mouseReleased(MouseEvent e) {

  }

  @Override
  public void mouseEntered(MouseEvent e) {

  }

  @Override
  public void mouseExited(MouseEvent e) {

  }


  // Mouse Move events
  @Override
  public void mouseDragged(MouseEvent e) {
    gamePanel.setRectPos(e.getX(), e.getY());

  }

  @Override
  public void mouseMoved(MouseEvent e) {


  }
}
