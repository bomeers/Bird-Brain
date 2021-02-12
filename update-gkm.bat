@echo off

if exist "%~dp0\node_modules\gkm\lib\lib\update.txt" (
    @echo JNativeHook has already been updated.
) else (
    @echo Updating JNativeHook.jar
    xcopy "%~dp0src\requirements\JNativeHook.jar" "%~dp0\node_modules\gkm\lib\lib\" /-Y
    echo.>"%~dp0\node_modules\gkm\lib\lib\update.txt"
)

pause