using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;

namespace Bird_Brain
{
    public partial class Form1 : Form
    {
        private KeyHandler _keyHandler;
        private List<Keys> keys = new List<Keys>() { Keys.W, Keys.A, Keys.S, Keys.D };

        public Form1()
        {
            InitializeComponent();
            //foreach (var key in keys) (_keyHandler = new KeyHandler(key, this)).Register();
        }

        #region Form Editor
        private void label1_Click(object sender, EventArgs e)
        {

        }

        private async void Form1_Load(object sender, EventArgs e)
        {

        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            label1.Text = e.KeyCode.ToString();
        }
        #endregion

        
        // Key Logger =======================

        private void HandleHotkey(Keys key)
        {
            label1.Text = key.ToString() + " done";
        }

        protected override void WndProc(ref Message m)
        {
            //if (m.Msg == Constants.WM_HOTKEY_MSG_ID)
            //    HandleHotkey((Keys)(((int)m.LParam >> 16) & 0xFFFF));

            KeyState keyState = new KeyState();
            if (keyState.GetKeyState(Keys.W) == 1) HandleHotkey(Keys.W);

            base.WndProc(ref m);
        }
    }
}
