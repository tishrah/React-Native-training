package com.nativeapp;

import android.graphics.Color;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.ReactTextView;

public class ReactTextManager extends SimpleViewManager<ReactTextView> {
    ReactApplicationContext mCallerContext;

    public ReactTextManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "TextView";
    }

    @NonNull
    @Override
    protected ReactTextView createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        return new ReactTextView(mCallerContext);
    }

    @ReactProp(name = "text")
    public void setSrc(ReactTextView view, @Nullable String text) {
        view.setText(text);
        //view.setTextColor(Integer.parseInt("#000000"));
    }


    @ReactProp(name = "color")
    public void setColor(ReactTextView view, @Nullable String color) {
        view.setTextColor(Color.parseColor(color));
    }
}
