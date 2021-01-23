using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Windows.Forms;

namespace Bird_Brain
{
    public partial class Form1 : Form
    {
        #region Dll Imports
        [DllImport("user32.dll")]
        public static extern bool GetAsyncKeyState(Keys key);
        #endregion

        private List<Keys> keys = new List<Keys>() { };

        public Form1()
        {
            InitializeComponent();
            StartTimer(timer1_Tick);
        }

        #region Form Editor
        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            // This will be used later on
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (GetAsyncKeyState(Keys.W) == true) label1.Text = Keys.W + " special";
            else if (GetAsyncKeyState(Keys.A) == true) label1.Text = Keys.A + " special";
            else if (GetAsyncKeyState(Keys.S) == true) label1.Text = Keys.S + " special";
            else if (GetAsyncKeyState(Keys.D) == true) label1.Text = Keys.D + " special";

            else label1.Text = "Nothing Pressed";
        }
        #endregion

        private void StartTimer(EventHandler eventHandler)
        {
            timer1.Tick += new EventHandler(eventHandler);
            timer1.Interval = 16;
            timer1.Start();
        }
    }
}
