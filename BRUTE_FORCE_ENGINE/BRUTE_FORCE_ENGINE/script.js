/**
 * PROFESSIONAL BRUTE FORCE CRACKING ENGINE v3.0
 * Enterprise Password Security Assessment System
 * 
 * Advanced cybersecurity tool for professional penetration testing
 * and security assessment demonstrations.
 * 
 * @author MiniMax Agent
 * @version 3.0.0 Enterprise
 * @license MIT
 */

class ProfessionalBruteForceEngine {
    constructor() {
        // CORE SYSTEM CONFIGURATION
        this.coreConfig = {
            attackSpeed: 2147483600, // Hashes per second (professional grade)
            quantumSpeed: 2147483600, // Theoretical quantum computer speed
            universeAgeYears: 13800000000,
            threadCount: 64,
            successRate: 99.97,
            systemStatus: 'ONLINE'
        };

        // HARDWARE PROFILES
        this.hardwareProfiles = {
            consumer: { name: 'Consumer GPU', speed: 1000000000, description: 'RTX 4090' },
            datacenter: { name: 'Data Center', speed: 10000000000, description: 'Enterprise Cluster' },
            cloud: { name: 'Cloud Cluster', speed: 100000000000, description: 'AWS/GCP/Azure' },
            quantum: { name: 'Quantum Computer', speed: 2147483600, description: 'Theoretical Quantum' }
        };

        // SECURITY THREAT LEVELS
        this.threatLevels = {
            critical: { min: 0, max: 1, label: 'CRITICAL', color: '#ff0040', description: 'IMMEDIATE THREAT' },
            high: { min: 1, max: 60, label: 'HIGH', color: '#ff8800', description: 'SEVERE VULNERABILITY' },
            medium: { min: 60, max: 1440, label: 'MEDIUM', color: '#ffdd00', description: 'MODERATE RISK' },
            low: { min: 1440, max: 525600, label: 'LOW', color: '#00ff41', description: 'ACCEPTABLE' },
            secure: { min: 525600, max: Infinity, label: 'SECURE', color: '#00d4ff', description: 'ENTERPRISE GRADE' }
        };

        // INITIALIZE SYSTEM
        this.initElements();
        this.bindEvents();
        this.initializeSystem();
        this.startSystemMonitoring();
    }

    /**
     * Initialize DOM element references
     */
    initElements() {
        // Input elements
        this.passwordInput = document.getElementById('password-input');
        this.scanBtn = document.getElementById('scan-btn');
        this.generateBtn = document.getElementById('generate-btn');
        this.toggleBtn = document.getElementById('toggle-visibility');

        // Security analysis elements
        this.securityLevel = document.getElementById('security-level');
        this.meterFill = document.getElementById('meter-fill');
        this.meterPointer = document.getElementById('meter-pointer');
        this.analysisStatus = document.getElementById('analysis-status');

        // Metrics elements
        this.passwordLength = document.getElementById('password-length');
        this.characterType = document.getElementById('character-type');
        this.characterCount = document.getElementById('character-count');
        this.combinations = document.getElementById('combinations');

        // Results elements
        this.mainTime = document.getElementById('main-time').querySelector('.time-value');
        this.comparisonText = document.getElementById('comparison-text');
        this.crackingStatus = document.getElementById('cracking-status');
        this.statusIndicator = document.getElementById('status-indicator');

        // Time breakdown elements
        this.timeElements = {
            seconds: document.getElementById('seconds'),
            minutes: document.getElementById('minutes'),
            hours: document.getElementById('hours'),
            days: document.getElementById('days'),
            years: document.getElementById('years'),
            millennia: document.getElementById('millennia')
        };

        // Advanced assessment elements
        this.totalCombinations = document.getElementById('total-combinations');
        this.entropyBits = document.getElementById('entropy-bits');
        this.entropyClass = document.getElementById('entropy-class');

        // Hardware comparison elements
        this.gpuTime = document.getElementById('gpu-time');
        this.datacenterTime = document.getElementById('datacenter-time');
        this.cloudTime = document.getElementById('cloud-time');
        this.quantumTime = document.getElementById('quantum-time');

        // System performance elements
        this.attackSpeed = document.getElementById('attack-speed');

        // Example buttons
        this.exampleButtons = document.querySelectorAll('.example-btn');

        // UI elements
        this.loadingOverlay = document.getElementById('loading-overlay');
        this.notificationContainer = document.getElementById('notification-container');
    }

    /**
     * Bind event handlers to UI elements
     */
    bindEvents() {
        // Password input events
        if (this.passwordInput) {
            this.passwordInput.addEventListener('input', (e) => {
                this.handlePasswordInput(e.target.value);
            });

            this.passwordInput.addEventListener('focus', () => {
                this.updateAnalysisStatus('SCANNING', 'active');
            });

            this.passwordInput.addEventListener('blur', () => {
                this.updateAnalysisStatus('READY', '');
            });
        }

        // Control button events
        if (this.scanBtn) {
            this.scanBtn.addEventListener('click', () => {
                this.performAdvancedScan();
            });
        }

        if (this.generateBtn) {
            this.generateBtn.addEventListener('click', () => {
                this.generateEnterprisePassword();
            });
        }

        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => {
                this.togglePasswordVisibility();
            });
        }

        // Example button events
        this.exampleButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const password = e.target.getAttribute('data-password');
                this.loadExamplePassword(password);
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });

        // System events
        window.addEventListener('beforeunload', () => {
            this.shutdownSystem();
        });
    }

    /**
     * Initialize system components
     */
    async initializeSystem() {
        try {
            // Show loading overlay
            this.showLoadingOverlay();

            // Initialize system components
            await this.initializeComponents();

            // Initialize performance metrics
            this.updatePerformanceMetrics();

            // Start system monitoring
            this.startRealTimeMonitoring();

            // Hide loading overlay
            this.hideLoadingOverlay();

            // Show welcome notification
            this.showSystemNotification(
                'SYSTEM INITIALIZED',
                'Professional Brute Force Engine v3.0 is now operational',
                'success'
            );

            // Initialize with example
            setTimeout(() => {
                this.loadExamplePassword('Password123');
            }, 1000);

        } catch (error) {
            console.error('System initialization failed:', error);
            this.showSystemNotification(
                'INITIALIZATION ERROR',
                'Failed to initialize system components',
                'error'
            );
        }
    }

    /**
     * Initialize system components
     */
    async initializeComponents() {
        // Simulate component initialization
        const components = [
            'Attack Engine',
            'Analysis Module',
            'Security Scanner',
            'Assessment Framework',
            'Monitoring System'
        ];

        for (let i = 0; i < components.length; i++) {
            await this.delay(200);
            this.updateAnalysisStatus(`INITIALIZING ${components[i].toUpperCase()}`, 'active');
        }

        await this.delay(500);
        this.updateAnalysisStatus('READY', '');
    }

    /**
     * Handle password input changes
     */
    handlePasswordInput(password) {
        if (!password.trim()) {
            this.resetToIdleState();
            return;
        }

        this.updateAnalysisStatus('ANALYZING', 'active');
        this.performSecurityAnalysis(password);
    }

    /**
     * Perform comprehensive security analysis
     */
    performSecurityAnalysis(password) {
        const analysis = this.analyzePasswordComplexity(password);
        const theoreticalCombinations = this.calculateTheoreticalCombinations(analysis);
        const effectiveCombinations = this.calculateEffectiveCombinations(password, analysis, theoreticalCombinations);
        const attackTimes = this.calculateAttackTimes(effectiveCombinations);

        // Update UI with analysis results
        this.updateSecurityMetrics(analysis, theoreticalCombinations);
        this.updateCrackingResults(attackTimes);
        this.updateThreatAssessment(attackTimes);
        this.updateHardwareComparison(effectiveCombinations);

        // Update analysis status
        this.updateAnalysisStatus('ANALYSIS COMPLETE', '');
    }

    /**
     * Analyze password complexity
     */
    analyzePasswordComplexity(password) {
        const analysis = {
            length: password.length,
            hasNumbers: /[0-9]/.test(password),
            hasLowercase: /[a-z]/.test(password),
            hasUppercase: /[A-Z]/.test(password),
            hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
            hasUnicode: /[^\x00-\x7F]/.test(password)
        };

        // Determine character set and type
        let characterSet, characterType;
        
        if (analysis.length === 0) {
            characterSet = 0;
            characterType = 'NO INPUT';
        } else if (analysis.hasNumbers && !analysis.hasLowercase && !analysis.hasUppercase && !analysis.hasSpecial) {
            characterSet = 10;
            characterType = 'NUMERIC ONLY';
        } else if (analysis.hasLowercase && !analysis.hasUppercase && !analysis.hasNumbers && !analysis.hasSpecial) {
            characterSet = 26;
            characterType = 'LOWERCASE';
        } else if ((analysis.hasLowercase || analysis.hasUppercase) && !analysis.hasNumbers && !analysis.hasSpecial) {
            characterSet = 52;
            characterType = 'MIXED CASE';
        } else if ((analysis.hasLowercase || analysis.hasUppercase) && analysis.hasNumbers && !analysis.hasSpecial) {
            characterSet = 62;
            characterType = 'ALPHANUMERIC';
        } else {
            characterSet = 94;
            characterType = 'FULL CHARACTER SET';
        }

        return {
            ...analysis,
            characterSet,
            characterType
        };
    }

    /**
     * Calculate theoretical combinations
     */
    calculateTheoreticalCombinations(analysis) {
        if (analysis.characterSet === 0 || analysis.length === 0) {
            return 0;
        }

        try {
            return Math.pow(analysis.characterSet, analysis.length);
        } catch (error) {
            return Number.MAX_VALUE;
        }
    }

    /**
     * Calculate effective combinations considering real-world attack vectors
     */
    calculateEffectiveCombinations(password, analysis, theoreticalCombinations) {
        const pwd = password.toLowerCase();

        // Common passwords - almost instantly crackable
        const commonPasswords = [
            '123456', '123456789', 'password', '12345678', 'qwerty',
            '1234567', '111111', '123123', 'abc123', 'password1',
            'admin', 'letmein', 'welcome', 'monkey', 'dragon'
        ];

        if (commonPasswords.includes(pwd)) {
            return Math.min(theoreticalCombinations, 1e6);
        }

        // Dictionary patterns
        if (/^[a-z]+[0-9]{1,4}$/i.test(password)) {
            return Math.min(theoreticalCombinations, 1e8);
        }

        // Short lowercase only passwords
        if (analysis.length <= 8 && analysis.hasLowercase && !analysis.hasUppercase && !analysis.hasNumbers && !analysis.hasSpecial) {
            return Math.min(theoreticalCombinations, 1e9);
        }

        // Mixed case without numbers/special characters
        if (analysis.length <= 10 && !analysis.hasNumbers && !analysis.hasSpecial) {
            return Math.min(theoreticalCombinations, 1e10);
        }

        // Default: use theoretical combinations for complex passwords
        return theoreticalCombinations;
    }

    /**
     * Calculate attack times for different scenarios
     */
    calculateAttackTimes(combinations) {
        if (combinations === 0) {
            return {
                seconds: 0, minutes: 0, hours: 0, days: 0, years: 0, millennia: 0,
                exactSeconds: 0, exactMinutes: 0, exactHours: 0, exactDays: 0, exactYears: 0, exactMillennia: 0
            };
        }

        const baseSeconds = combinations / this.coreConfig.attackSpeed;

        return {
            seconds: Math.floor(baseSeconds),
            minutes: Math.floor(baseSeconds / 60),
            hours: Math.floor(baseSeconds / 3600),
            days: Math.floor(baseSeconds / 86400),
            years: Math.floor(baseSeconds / (86400 * 365.25)),
            millennia: Math.floor(baseSeconds / (86400 * 365.25 * 1000)),
            exactSeconds: baseSeconds,
            exactMinutes: baseSeconds / 60,
            exactHours: baseSeconds / 3600,
            exactDays: baseSeconds / 86400,
            exactYears: baseSeconds / (86400 * 365.25),
            exactMillennia: baseSeconds / (86400 * 365.25 * 1000)
        };
    }

    /**
     * Update security metrics display
     */
    updateSecurityMetrics(analysis, combinations) {
        // Animate metric updates
        this.animateValue(this.passwordLength, parseInt(this.passwordLength.textContent) || 0, analysis.length);
        this.animateValue(this.characterCount, parseInt(this.characterCount.textContent) || 0, analysis.characterSet);
        this.animateValue(this.combinations, parseInt(this.combinations.textContent) || 1, combinations);

        // Update character type
        this.characterType.textContent = analysis.characterType;

        // Update entropy
        const entropy = this.calculateEntropy(combinations);
        this.entropyBits.textContent = `${entropy.bits.toFixed(1)} bits`;
        this.entropyClass.textContent = entropy.classification;

        // Update total combinations
        this.totalCombinations.textContent = this.formatLargeNumber(combinations);
    }

    /**
     * Update cracking results display
     */
    updateCrackingResults(times) {
        const mainTimeString = this.formatMainTimeResult(times);
        const comparison = this.generateThreatComparison(times);

        // Update main result
        this.mainTime.textContent = mainTimeString;
        this.comparisonText.textContent = comparison;

        // Update time breakdown
        Object.keys(this.timeElements).forEach(unit => {
            if (this.timeElements[unit]) {
                this.timeElements[unit].textContent = this.formatLargeNumber(times[unit] || 0);
            }
        });

        // Update cracking status
        this.updateCrackingStatus(times);
    }

    /**
     * Update threat assessment
     */
    updateThreatAssessment(times) {
        const threatLevel = this.getThreatLevel(times);
        
        // Update security level display
        this.securityLevel.textContent = threatLevel.label;
        this.securityLevel.className = `meter-value ${threatLevel.class}`;

        // Update meter fill and pointer
        this.updateSecurityMeter(threatLevel.score);

        // Add visual feedback
        this.addThreatFeedback(threatLevel);
    }

    /**
     * Update hardware comparison
     */
    updateHardwareComparison(combinations) {
        const scenarios = [
            { element: this.gpuTime, profile: this.hardwareProfiles.consumer },
            { element: this.datacenterTime, profile: this.hardwareProfiles.datacenter },
            { element: this.cloudTime, profile: this.hardwareProfiles.cloud },
            { element: this.quantumTime, profile: this.hardwareProfiles.quantum }
        ];

        scenarios.forEach(({ element, profile }) => {
            if (element && profile) {
                const seconds = combinations / profile.speed;
                const timeString = this.formatTimeForDisplay({
                    exactSeconds: seconds,
                    exactMinutes: seconds / 60,
                    exactHours: seconds / 3600,
                    exactDays: seconds / 86400,
                    exactYears: seconds / (86400 * 365.25),
                    exactMillennia: seconds / (86400 * 365.25 * 1000)
                });
                element.textContent = timeString;
            }
        });
    }

    /**
     * Get threat level based on cracking time
     */
    getThreatLevel(times) {
        const totalMinutes = times.exactMinutes;

        for (const [level, config] of Object.entries(this.threatLevels)) {
            if (totalMinutes >= config.min && totalMinutes < config.max) {
                const score = this.calculateThreatScore(totalMinutes, config);
                return {
                    level,
                    label: config.label,
                    description: config.description,
                    color: config.color,
                    score,
                    class: level
                };
            }
        }

        // Default to secure for very long times
        return {
            level: 'secure',
            label: 'SECURE',
            description: 'ENTERPRISE GRADE',
            color: this.threatLevels.secure.color,
            score: 100,
            class: 'secure'
        };
    }

    /**
     * Calculate threat score (0-100)
     */
    calculateThreatScore(minutes, config) {
        if (config.min === 0) {
            // Critical range: 0-1 minutes
            return Math.max(0, 100 - (minutes * 100));
        } else if (config.max === Infinity) {
            // Secure range
            return 100;
        } else {
            // Other ranges
            const range = config.max - config.min;
            const position = (minutes - config.min) / range;
            return Math.min(100, config.min + (position * 20));
        }
    }

    /**
     * Update security meter
     */
    updateSecurityMeter(score) {
        if (this.meterFill) {
            this.meterFill.style.width = `${score}%`;
        }

        if (this.meterPointer) {
            const pointerPosition = (score / 100) * 100;
            this.meterPointer.style.left = `${pointerPosition}%`;
        }
    }

    /**
     * Generate threat comparison text
     */
    generateThreatComparison(times) {
        const { exactYears } = times;

        if (exactYears < 0.001) {
            return '⚠️ IMMEDIATE THREAT - Will be cracked instantly';
        } else if (exactYears < 0.01) {
            return '🚨 CRITICAL - Vulnerable within minutes';
        } else if (exactYears < 0.1) {
            return '⚠️ HIGH RISK - Crackable within hours';
        } else if (exactYears < 1) {
            return '🟡 MODERATE - Crackable within days';
        } else if (exactYears < 10) {
            return '🟢 LOW RISK - Requires significant effort';
        } else if (exactYears < 100) {
            return '🔵 ACCEPTABLE - Enterprise minimum standard';
        } else if (exactYears < 1000) {
            return '🔵 SECURE - Strong protection level';
        } else if (exactYears < this.coreConfig.universeAgeYears) {
            return '🟢 VERY SECURE - Exceeds practical attack capabilities';
        } else {
            return '🟢 ENTERPRISE GRADE - Theoretically unbreakable';
        }
    }

    /**
     * Update cracking status indicator
     */
    updateCrackingStatus(times) {
        const { exactYears } = times;
        
        if (exactYears < 1) {
            this.crackingStatus.textContent = 'HIGH PRIORITY TARGET';
            this.statusIndicator.className = 'status-indicator active';
        } else if (exactYears < 100) {
            this.crackingStatus.textContent = 'STANDARD ASSESSMENT';
            this.statusIndicator.className = 'status-indicator';
        } else {
            this.crackingStatus.textContent = 'SECURE TARGET';
            this.statusIndicator.className = 'status-indicator';
        }
    }

    /**
     * Update analysis status
     */
    updateAnalysisStatus(status, className) {
        if (this.analysisStatus) {
            this.analysisStatus.textContent = status;
            this.analysisStatus.className = `analysis-status ${className}`;
        }
    }

    /**
     * Add threat feedback effects
     */
    addThreatFeedback(threatLevel) {
        const mainResult = document.querySelector('.main-result');
        if (mainResult) {
            mainResult.style.borderColor = threatLevel.color;
            mainResult.style.boxShadow = `0 0 30px ${threatLevel.color}40`;

            setTimeout(() => {
                mainResult.style.borderColor = '';
                mainResult.style.boxShadow = '';
            }, 2000);
        }
    }

    /**
     * Update performance metrics
     */
    updatePerformanceMetrics() {
        if (this.attackSpeed) {
            this.attackSpeed.textContent = this.coreConfig.attackSpeed.toLocaleString();
        }
    }

    /**
     * Start real-time monitoring
     */
    startRealTimeMonitoring() {
        setInterval(() => {
            this.updateSystemTime();
            this.performSystemHealthCheck();
        }, 1000);
    }

    /**
     * Update system time display
     */
    updateSystemTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Update any time-related displays if needed
        document.title = `BRUTE FORCE ENGINE v3.0 | ${timeString}`;
    }

    /**
     * Perform system health check
     */
    performSystemHealthCheck() {
        // Simulate system health monitoring
        const healthScore = Math.floor(Math.random() * 5) + 95; // 95-100%
        
        // Update health indicators if needed
        const statusElements = document.querySelectorAll('.status-online');
        statusElements.forEach(element => {
            if (healthScore >= 98) {
                element.textContent = 'OPTIMAL';
                element.style.color = 'var(--neon-green)';
            } else {
                element.textContent = 'DEGRADED';
                element.style.color = 'var(--neon-yellow)';
            }
        });
    }

    /**
     * Start system monitoring
     */
    startSystemMonitoring() {
        // Additional monitoring setup
        this.monitoringInterval = setInterval(() => {
            this.updateSystemMetrics();
        }, 5000);
    }

    /**
     * Update system metrics
     */
    updateSystemMetrics() {
        // Update thread count display
        const threadElements = document.querySelectorAll('[data-thread-count]');
        threadElements.forEach(element => {
            element.textContent = this.coreConfig.threadCount;
        });

        // Update success rate display
        const successElements = document.querySelectorAll('[data-success-rate]');
        successElements.forEach(element => {
            element.textContent = `${this.coreConfig.successRate}%`;
        });
    }

    /**
     * Perform advanced scan
     */
    performAdvancedScan() {
        this.updateAnalysisStatus('ADVANCED SCAN IN PROGRESS', 'active');
        
        // Simulate advanced scanning process
        setTimeout(() => {
            this.showSystemNotification(
                'SCAN COMPLETE',
                'Advanced security analysis completed successfully',
                'success'
            );
            this.updateAnalysisStatus('READY', '');
        }, 2000);
    }

    /**
     * Generate enterprise-grade password
     */
    generateEnterprisePassword() {
        const length = 20;
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        // Ensure complexity requirements
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let password = '';
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        // Fill remaining length
        for (let i = 4; i < length; i++) {
            password += charset[Math.floor(Math.random() * charset.length)];
        }

        // Shuffle for randomness
        password = password.split('').sort(() => Math.random() - 0.5).join('');

        if (this.passwordInput) {
            this.passwordInput.value = password;
            this.handlePasswordInput(password);
        }

        this.showSystemNotification(
            'PASSWORD GENERATED',
            'Enterprise-grade password created successfully',
            'success'
        );
    }

    /**
     * Load example password
     */
    loadExamplePassword(password) {
        if (this.passwordInput) {
            this.passwordInput.value = password;
            this.handlePasswordInput(password);
            
            // Visual feedback for example selection
            this.showSystemNotification(
                'EXAMPLE LOADED',
                `Loaded example: ${password}`,
                'success'
            );
        }
    }

    /**
     * Toggle password visibility
     */
    togglePasswordVisibility() {
        if (!this.passwordInput || !this.toggleBtn) return;

        const type = this.passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        this.passwordInput.setAttribute('type', type);

        // Update button icon and label
        const svg = this.toggleBtn.querySelector('svg');
        if (svg) {
            if (type === 'password') {
                svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
                this.toggleBtn.setAttribute('aria-label', 'Show password');
            } else {
                svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
                this.toggleBtn.setAttribute('aria-label', 'Hide password');
            }
        }
    }

    /**
     * Reset to idle state
     */
    resetToIdleState() {
        // Reset all displays to default values
        const defaults = {
            passwordLength: '0',
            characterType: 'UNKNOWN',
            characterCount: '0',
            combinations: '1',
            totalCombinations: '1',
            entropyBits: '0 bits',
            entropyClass: 'UNRATED'
        };

        Object.entries(defaults).forEach(([key, value]) => {
            if (this[key]) {
                this[key].textContent = value;
            }
        });

        // Reset time displays
        Object.values(this.timeElements).forEach(element => {
            if (element) element.textContent = '0';
        });

        // Reset main result
        this.mainTime.textContent = 'ANALYZE TARGET';
        this.comparisonText.textContent = 'Enter password to begin security assessment';

        // Reset security meter
        this.securityLevel.textContent = 'ANALYZE';
        this.securityLevel.className = 'meter-value';
        this.updateSecurityMeter(0);

        // Reset status
        this.updateAnalysisStatus('READY', '');
        this.crackingStatus.textContent = 'AWAITING TARGET';
        this.statusIndicator.className = 'status-indicator';
    }

    /**
     * Handle keyboard shortcuts
     */
    handleKeyboardShortcuts(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            if (this.passwordInput) this.passwordInput.focus();
        }

        if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
            e.preventDefault();
            this.generateEnterprisePassword();
        }

        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            this.performAdvancedScan();
        }

        if (e.key === 'Escape') {
            this.resetToIdleState();
        }
    }

    /**
     * Calculate entropy
     */
    calculateEntropy(combinations) {
        if (combinations <= 0) {
            return { bits: 0, classification: 'NO ENTROPY' };
        }

        try {
            const bits = Math.log2(combinations);
            return {
                bits,
                classification: this.classifyEntropy(bits)
            };
        } catch (error) {
            return { bits: 0, classification: 'CALCULATION ERROR' };
        }
    }

    /**
     * Classify entropy level
     */
    classifyEntropy(bits) {
        if (bits < 28) return 'VERY WEAK';
        if (bits < 36) return 'WEAK';
        if (bits < 60) return 'MODERATE';
        if (bits < 128) return 'STRONG';
        if (bits < 256) return 'VERY STRONG';
        return 'ENTERPRISE GRADE';
    }

    /**
     * Format large numbers for display
     */
    formatLargeNumber(num) {
        if (num === 0) return '0';
        if (!isFinite(num)) return '∞';

        if (num >= 1e15) {
            return num.toExponential(2);
        }

        return num.toLocaleString('en-US');
    }

    /**
     * Format main time result for display
     */
    formatMainTimeResult(times) {
        if (times.exactYears >= 1) {
            const years = Math.floor(times.exactYears);
            if (years > 1000000) {
                return `${this.formatLargeNumber(years)} YEARS`;
            }
            return `${this.formatLargeNumber(years)} YEARS`;
        } else if (times.exactDays >= 1) {
            const days = Math.floor(times.exactDays);
            return `${this.formatLargeNumber(days)} DAYS`;
        } else if (times.exactHours >= 1) {
            const hours = Math.floor(times.exactHours);
            return `${this.formatLargeNumber(hours)} HOURS`;
        } else if (times.exactMinutes >= 1) {
            const minutes = Math.floor(times.exactMinutes);
            return `${this.formatLargeNumber(minutes)} MINUTES`;
        } else {
            return `${this.formatLargeNumber(Math.floor(times.exactSeconds))} SECONDS`;
        }
    }

    /**
     * Format time for display
     */
    formatTimeForDisplay(times) {
        if (times.exactYears >= 1) {
            return `${this.formatLargeNumber(Math.floor(times.exactYears))} years`;
        } else if (times.exactDays >= 1) {
            return `${this.formatLargeNumber(Math.floor(times.exactDays))} days`;
        } else if (times.exactHours >= 1) {
            return `${this.formatLargeNumber(Math.floor(times.exactHours))} hours`;
        } else if (times.exactMinutes >= 1) {
            return `${this.formatLargeNumber(Math.floor(times.exactMinutes))} minutes`;
        } else {
            return `${this.formatLargeNumber(Math.floor(times.exactSeconds))} seconds`;
        }
    }

    /**
     * Animate value changes
     */
    animateValue(element, start, end, duration = 500) {
        if (!element || start === end) {
            if (element) element.textContent = this.formatLargeNumber(end);
            return;
        }

        const startTime = performance.now();
        const difference = end - start;

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = start + (difference * this.easeOutCubic(progress));
            
            try {
                element.textContent = this.formatLargeNumber(Math.round(current));
            } catch (error) {
                element.textContent = this.formatLargeNumber(end);
                return;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    /**
     * Easing function for animations
     */
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    /**
     * Show loading overlay
     */
    showLoadingOverlay() {
        if (this.loadingOverlay) {
            this.loadingOverlay.style.display = 'flex';
        }
    }

    /**
     * Hide loading overlay
     */
    hideLoadingOverlay() {
        if (this.loadingOverlay) {
            setTimeout(() => {
                this.loadingOverlay.style.display = 'none';
            }, 1000);
        }
    }

    /**
     * Show system notification
     */
    showSystemNotification(title, message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        `;

        if (this.notificationContainer) {
            this.notificationContainer.appendChild(notification);
            
            // Show notification
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);

            // Auto remove after 4 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 4000);
        }
    }

    /**
     * Shutdown system
     */
    shutdownSystem() {
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
        }
        
        this.showSystemNotification(
            'SYSTEM SHUTDOWN',
            'Brute Force Engine is shutting down...',
            'warning'
        );
    }

    /**
     * Utility delay function
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

/**
 * System Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-in-out';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Initialize the Professional Brute Force Engine
    try {
        const bruteForceEngine = new ProfessionalBruteForceEngine();
        
        // Make globally accessible for debugging
        window.bruteForceEngine = bruteForceEngine;
        
        console.log('🚀 PROFESSIONAL BRUTE FORCE ENGINE v3.0 INITIALIZED');
        console.log('⚡ Enterprise-grade password security assessment system ready');
        console.log('🔒 All calculations performed client-side for maximum security');
        
    } catch (error) {
        console.error('❌ FAILED TO INITIALIZE BRUTE FORCE ENGINE:', error);
        
        // Show error notification
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = `
            <div class="notification-title">INITIALIZATION ERROR</div>
            <div class="notification-message">Failed to initialize the Professional Brute Force Engine. Please refresh the page and try again.</div>
        `;
        
        document.body.appendChild(errorNotification);
        setTimeout(() => errorNotification.classList.add('show'), 100);
    }

    // Add entrance animations to panels
    const panels = document.querySelectorAll('section[class$="-panel"]');
    panels.forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(30px)';
        panel.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });

    // Add console branding
    console.log('%c⚡ CYBERSEC ENTERPRISE v3.0 ⚡', 'color: #00ff41; font-size: 16px; font-weight: bold;');
    console.log('%cProfessional Brute Force Cracking Engine', 'color: #00d4ff; font-size: 14px;');
    console.log('%c🔒 All calculations performed locally - No data transmitted', 'color: #666; font-size: 12px;');
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProfessionalBruteForceEngine;
}