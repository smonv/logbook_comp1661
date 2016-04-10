package tthanh.com.carpetcaculator;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.text.DecimalFormat;

public class MainActivity extends AppCompatActivity {
    private Button btnCal;
    private EditText ch;
    private EditText cw;
    private EditText ce;
    private TextView cs;
    private TextView tc;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btnCal = (Button) findViewById(R.id.btnCal);
        ch = (EditText) findViewById(R.id.ch);
        cw = (EditText) findViewById(R.id.cw);
        ce = (EditText) findViewById(R.id.ce);
        cs = (TextView) findViewById(R.id.cs);
        tc = (TextView) findViewById(R.id.tc);
        btnCal.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(ch.getText().toString().isEmpty() || cw.getText().toString().isEmpty() || ce.getText().toString().isEmpty()){
                    alert("Error", "All fields are required.");
                }
                Integer capretSize = Integer.parseInt(ch.getText().toString()) * Integer.parseInt(cw.getText().toString());
                Float capretCost = capretSize * Float.parseFloat(ce.getText().toString());

                cs.setText(String.format("%d", capretSize));
                tc.setText(String.format("%.2f", capretCost));
            }
        });
    }

    public void alert(String title, String message){
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle(title);
        builder.setMessage(message);
        builder.setCancelable(false);
        builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
            }
        });
        AlertDialog dialog = builder.create();
        dialog.show();
    }
}
