@echo off
echo.
echo ==============================
echo   Unciv Chinese Community
echo ==============================
echo.
echo Select mode:
echo   1. Dev Mode (Hot reload, port 5173)
echo   2. Preview Mode (Production build, port 4173)
echo.
set /p choice=Enter choice (1/2):

if "%choice%"=="1" goto dev_mode
if "%choice%"=="2" goto preview_mode
echo.
echo Invalid choice, exit...
pause
exit /b

:dev_mode
echo.
echo Starting dev mode...
echo.
echo Press Ctrl+C to stop server
echo.
call npm run docs:dev
goto end

:preview_mode
echo.
echo Building project...
call npm run docs:build
echo.
echo Build complete! Starting preview server...
echo.
echo Press Ctrl+C to stop server
echo.
start http://localhost:4173/
call npm run docs:preview
goto end

:end
echo.
echo Server stopped
pause