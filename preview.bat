@echo off
title Unciv Chinese Community - Website Preview Tool

:main
cls
echo ========================================
echo   Unciv Website Preview Tool
echo ========================================
echo.
echo Please select preview mode:
echo.
echo   1. Development Mode (Recommended)
echo      - Best for writing and editing docs
echo      - Auto-refresh when you save changes
echo      - First run may take a few seconds
echo.
echo   2. Production Preview
echo      - Best for viewing final result
echo      - Needs to build first, slower
echo      - Good for checking broken links and errors
echo.
echo   0. Exit
echo.
set /p choice=Enter option (0-2):

if "%choice%"=="1" goto dev_mode
if "%choice%"=="2" goto build_preview
if "%choice%"=="0" goto exit

echo.
echo Invalid input, please try again
timeout /t 2 >nul
goto main

:dev_mode
cls
echo ========================================
echo   Starting Development Mode...
echo ========================================
echo.
echo First run may install dependencies, please wait...
echo.
echo Browser will open automatically at: http://localhost:5173
echo.
echo Press Ctrl+C to stop
echo.

if not exist "node_modules" (
    echo.
    echo First time use detected, installing dependencies...
    call npm install
    if errorlevel 1 (
        echo.
        echo Failed to install dependencies!
        echo.
        echo Possible reasons:
        echo   1. Node.js is not installed
        echo      Solution: Visit https://nodejs.org and install LTS version
        echo.
        echo   2. Network connection issue
        echo      Solution: Check network or try again later
        echo.
        pause
        goto main
    )
    echo.
    echo Dependencies installed!
)

start "" http://localhost:5173
call npm run docs:dev
pause
goto main

:build_preview
cls
echo ========================================
echo   Building and Previewing Production...
echo ========================================
echo.
echo Building may take 10-30 seconds, please wait...
echo.

call npm run docs:build
if errorlevel 1 (
    echo.
    echo Build failed!
    echo.
    pause
    goto main
)

echo.
echo Build complete! Starting preview server...
echo.
echo Opening browser at: http://localhost:4173
echo.
echo Press Ctrl+C to stop
echo.

start "" http://localhost:4173
call npm run docs:preview
pause
goto main

:exit
exit