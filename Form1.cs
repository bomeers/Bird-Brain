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
            foreach (var key in keys) (_keyHandler = new KeyHandler(key, this)).Register();
        }

        #region Form Editor
        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            label1.Text = e.KeyCode.ToString();
        }
        #endregion


        // Key Logger =======================

        private void HandleHotkey(string keyPress)
        {
            label1.Text = keyPress + " pressed | " + "w".GetHashCode() + " " + "W".GetHashCode();
        }
        protected override void WndProc(ref Message m)
        {
            if (m.Msg == Constants.WM_HOTKEY_MSG_ID)
                HandleHotkey((m.LParam.ToInt32() + " | " + m.WParam.ToInt32()).ToString());
            base.WndProc(ref m);
        }
    }
}
