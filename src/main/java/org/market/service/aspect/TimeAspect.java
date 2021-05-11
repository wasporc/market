package org.market.service.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class TimeAspect {

    private static Logger logger = LoggerFactory.getLogger(TimeAspect.class);

    @Around("execution(public * org.market.service.CartService.*(..))")
    public Object cartServiceTimeExecute(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
        long begin = System.currentTimeMillis();
        Object ret = proceedingJoinPoint.proceed();
        long end = System.currentTimeMillis();
        long duration = end - begin;
        logger.info("{} duration: {}",
                (MethodSignature) proceedingJoinPoint.getSignature(),
                duration);
        return ret;
    }
}
